import {Dimensions} from 'react-native';

let width = Dimensions.get('window').width;

export const ratio = width / 375;

export const Size = {};

for (let i = 1; i < 700; i++) {
  Size[`size${i}`] = i * ratio > i ? i : i * ratio;
}

export const Sizes = size => {
  return Size[`size${size}`];
};

export const Colors = {
  green: '#5dba2f',
  black: '#212121',
  white: '#ffffff',
  red: '#ed3833',
  placeholder: '#cccccc',
  yellow: '#fcba03',
  silver: '#818195',
};

export const BackgroundColors = {
  black: '#181a20',
  white: '#ffffff',
};

export const Shadow = {
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,
  elevation: 24,
};

export const FullScreen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
