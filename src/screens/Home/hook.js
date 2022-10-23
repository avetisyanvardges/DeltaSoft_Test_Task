import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Styles} from './style';
import {useNavigation} from '@react-navigation/native';

function useContainer() {
  const styles = Styles();
  const navigation = useNavigation();
  const renderPlugItem = ({item, index}) => {
    const {title, description, urlToImage} = item;

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Details', {item: item})}>
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
      </TouchableOpacity>
    );
  };

  const renderItemSeparatorComponent = () => <View style={styles.separator} />;

  return {
    styles,
    renderPlugItem,
    renderItemSeparatorComponent,
  };
}

export default useContainer;
