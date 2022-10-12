import remoteConfig from '@react-native-firebase/remote-config';
import {isEmpty} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getUrl() {
  try {
    await remoteConfig().fetchAndActivate();
    const url = remoteConfig().getValue('url').asString();
    if (!isEmpty(url)) {
      await AsyncStorage.setItem('url', url);
    }
    return url;
  } catch (e) {
    console.log(e, 'error:_firebaseRemote:getUrl');
  }
}

export default getUrl;
