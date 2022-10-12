import {StyleSheet} from 'react-native';
import {BackgroundColors, Colors, Shadow, Sizes} from '../assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    listContainer: {
      padding: 10,
      paddingBottom: 20,
    },
    itemContainer: {
      backgroundColor: BackgroundColors.white,
      borderRadius: Sizes(12),
      flexDirection: 'row',
      padding: Sizes(5),
      ...Shadow,
    },
    imageContainer: {
      justifyContent: 'center',
    },
    image: {
      width: Sizes(100),
      height: Sizes(100),
      resizeMode: 'contain',
      borderRadius: Sizes(10),
    },
    infoContainer: {
      flex: 1,
      marginHorizontal: Sizes(10),
    },
    title: {
      fontWeight: 'bold',
      color: Colors.black,
    },
    separator: {
      height: Sizes(10),
    },
  });
};

export {Styles};
