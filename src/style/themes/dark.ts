import { fonts, iconSizes, sizes, spacings, speeds } from './commons';
import { IAppTheme } from './types';

const colors = {
  accent: process.env.COLOR_ACCENT,
  accent2: '#333',
  accent3: '#fafafa',
  background: '#222',
  font: '#fafafa',
  fontAccent: process.env.COLOR_FONT_ACCENT,
  fontAccent2: 'fafafa',
  fontAccent3: '#222',
  shadow: 'rgba(0, 0, 0, 0.33)',
};

export const appThemeDark: IAppTheme = {
  colors,
  fonts,
  iconSizes,
  sizes,
  spacings,
  speeds,
};
