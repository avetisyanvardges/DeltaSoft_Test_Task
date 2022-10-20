import React from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import {Colors, Shadow, Sizes} from '../../assets/RootStyles';

function Details({route}) {
  const {
    item: {title, content, description, publishedAt, urlToImage},
  } = route.params;
  return (
    <View
      style={{
        flex: 1,
        margin: Sizes(10),
        ...Shadow,
        backgroundColor: Colors.white,
        borderRadius: Sizes(30),
      }}>
      <SharedElement id={publishedAt}>
        <Image
          style={{
            width: '100%',
            height: Sizes(300),
            borderTopLeftRadius: Sizes(30),
            borderTopRightRadius: Sizes(30),
          }}
          source={{
            uri: urlToImage,
          }}
        />
        <View style={{marginHorizontal: Sizes(5)}}>
          <Text
            style={{
              fontSize: Sizes(18),
              fontWeight: 'bold',
              color: Colors.black,
              marginTop: Sizes(5),
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginTop: Sizes(10),
              fontSize: Sizes(16),
              color: Colors.black,
            }}>
            {description}
          </Text>
          <Text
            style={{
              fontSize: Sizes(16),
              color: Colors.black,
            }}>
            {content}
          </Text>
        </View>
      </SharedElement>
    </View>
  );
}
Details.sharedElements = navigation => {
  const item = navigation.getParam('item');
  return [publishedAt];
};
export default Details;
