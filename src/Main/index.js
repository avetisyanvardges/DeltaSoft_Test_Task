import React from 'react';
import WebView from 'react-native-webview';
import useContainer from './hook';
import {FlatList} from 'react-native';
import {sportNews} from '../assets/MockData';

const Main = () => {
  const {
    styles,
    uri,
    webViewRef,
    conditionForPlug,
    renderPlugItem,
    renderItemSeparatorComponent,
  } = useContainer();
  return conditionForPlug ? (
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
