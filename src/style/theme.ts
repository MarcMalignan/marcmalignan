import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  accent: '#fa7268',
  background: '#fafafa',
  fontPrimary: '#222',
  fontSecondary: '#fafafa',
  separator: '#444',
  shadow: 'rgba(0, 0, 0, 0.2)',
};

const fonts = {
  title: "'Josefin Slab', serif",
  text: "'Open Sans', sans-serif",
};

const spacings = {
  tiny: '5px',
  small: '15px',
  medium: '30px',
  large: '50px',
  huge: '100px',
};

const speeds = {
  normal: '.3s',
};

export const appTheme = {
  colors,
  fonts,
  spacings,
  speeds,
};

export type TAppTheme = typeof appTheme;
export const styled = baseStyled as ThemedStyledInterface<TAppTheme>;
