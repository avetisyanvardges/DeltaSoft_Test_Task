import React from 'react';
import {sportNews} from '../../assets/MockData';
import {FlatList, View} from 'react-native';
import useContainer from './hook';

function Home(props) {
  const {styles, renderPlugItem, renderItemSeparatorComponent} = useContainer();
  return (
    <View>
      <FlatList
        data={sportNews}
        renderItem={renderPlugItem}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparatorComponent}
      />
    </View>
  );
}

export default Home;
