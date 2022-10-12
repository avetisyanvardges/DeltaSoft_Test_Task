import React from 'react';
import WebView from 'react-native-webview';
import useContainer from './hook';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {sportNews} from '../assets/MockData';

const Main = () => {
  const {
    styles,
    uri,
    webViewRef,
    loader,
    conditionForPlug,
    renderPlugItem,
    renderItemSeparatorComponent,
  } = useContainer();

  return loader ? (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size={'large'} />
    </View>
  ) : conditionForPlug ? (
    <FlatList
      data={sportNews}
      renderItem={renderPlugItem}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={renderItemSeparatorComponent}
    />
  ) : (
    <WebView
      ref={webViewRef}
      source={{
        uri,
      }}
    />
  );
};

export default Main;
