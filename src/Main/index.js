import React from 'react';
import WebView from 'react-native-webview';
import useContainer from './hook';
import {ActivityIndicator, View} from 'react-native';
import StackNavigation from '../navigation/StackNavigator';

const Main = () => {
  const {styles, uri, webViewRef, loader, conditionForPlug} = useContainer();
  return loader ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : conditionForPlug ? (
    <WebView
      ref={webViewRef}
      source={{
        uri,
      }}
    />
  ) : (
    <StackNavigation />
  );
};

export default Main;
