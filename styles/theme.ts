import { DefaultTheme } from 'styled-components';

const colors = {
  dark: '#1E1E1E',
  primary: '#454545',
  secondary: '#757575',
  tertiary: '#7D7D7D',
  border: '#EBEBEB',
  white: '#FFFFFF',
  blue: '#3DA5F5',
  blueLight: '#ECF6FE',
  blueDark: '#3186C4',
  green: '#22C58B',
  greenLight: '#26e09e',
  red: '#F86D7D',
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
