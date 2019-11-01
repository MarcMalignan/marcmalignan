import baseStyled, { ThemedStyledInterface } from 'styled-components';

const colors = {
  background: '#eee',
  fontColor: '#222',
};

const spacings = {
  small: '10px',
  medium: '20px',
  big: '30px',
};

export const appTheme = {
  colors,
  spacings,
};

type AppTheme = typeof appTheme;
export const styled = baseStyled as ThemedStyledInterface<AppTheme>;
