import { fonts, iconSizes, sizes, spacings, speeds } from './commons';
import { IAppTheme } from './types';

const colors = {
  accent: process.env.COLOR_ACCENT,
  accent2: '#eee',
  accent3: '#222',
  background: '#fafafa',
  font: '#222',
  fontAccent: process.env.COLOR_FONT_ACCENT,
  fontAccent2: '#222',
  fontAccent3: '#fafafa',
  shadow: 'rgba(0, 0, 0, 0.1)',
};

export const appThemeLight: IAppTheme = {
  colors,
  fonts,
  iconSizes,
  sizes,
  spacings,
  speeds,
};
