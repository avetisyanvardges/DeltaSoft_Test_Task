import React from 'react';
import {Image, Text, View} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import {Sizes} from '../../assets/RootStyles';

function Details({route}) {
  const {item} = route.params;
  return (
    <View>
      <SharedElement id={item.publishedAt}>
        <Image
          style={{width: '100%', height: Sizes(300)}}
          source={{
            uri: item.urlToImage,
          }}
        />
      </SharedElement>
    </View>
  );
}
Details.sharedElements = navigation => {
  const item = navigation.getParam('item');
  return [item.id];
};
export default Details;
