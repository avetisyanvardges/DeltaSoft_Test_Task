import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {isEmpty} from 'lodash';

export const deviceInfo = {
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
  appVersion: DeviceInfo.getVersion(),
  hasNotch: DeviceInfo.hasNotch(),
  isSimExist:
    DeviceInfo.getCarrierSync() !== 'unknown' &&
    !isEmpty(DeviceInfo.getCarrierSync()),
  brand: DeviceInfo.getBrand(),
  google: DeviceInfo.getBrand() === 'google',
  OS: Platform.OS,
  ios: Platform.OS === 'ios',
  android: Platform.OS === 'android',
};
