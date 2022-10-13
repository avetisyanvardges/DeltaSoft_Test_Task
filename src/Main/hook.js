import {useEffect, useRef, useState} from 'react';
import {BackHandler, Image, Text, View} from 'react-native';
import {deviceInfo} from '../assets/DeviceInfo';
import getUrl from '../services/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {isEmpty} from 'lodash';
import {Styles} from './styles';

function useContainer() {
  const webViewRef = useRef(null);
  const [uri, setUri] = useState('');
  const [loader, setLoader] = useState(true);
  const conditionForPlug =
    !isEmpty(uri) && !deviceInfo.google && deviceInfo.isSimExist;

  const styles = Styles();

  function getUri() {
    AsyncStorage.getItem('url').then(async url => {
      if (isEmpty(url)) {
        setUri(await getUrl());
        await setLoader(false);
        return;
      }
      await setUri(url);
      await setLoader(false);
    });
  }

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      BackHandler.exitApp();
      return true; // prevent default behavior (exit app)
    }
    return false;
  };

  const renderPlugItem = ({item, index}) => {
    const {title, description, urlToImage} = item;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: urlToImage}} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
    );
  };

  const renderItemSeparatorComponent = () => <View style={styles.separator} />;

  useEffect(() => {
    getUri();
    if (deviceInfo.android) {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);

      return () => {
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onAndroidBackPress,
        );
      };
    }
  }, []);

  return {
    styles,
    uri,
    webViewRef,
    conditionForPlug,
    renderPlugItem,
    renderItemSeparatorComponent,
    loader,
  };
}

export default useContainer;
