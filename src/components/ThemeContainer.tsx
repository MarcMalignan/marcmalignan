import React, { FC, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../services/context';
import { GlobalStyle } from '../style/GlobalStyle';
import { appThemeDark, appThemeLight } from '../style/themes';

export const ThemeContainer: FC<{}> = ({ children }) => {
  const { darkMode } = useContext(AppContext);

  const appTheme = darkMode ? appThemeDark : appThemeLight;

  return (
    <>
      <GlobalStyle theme={appTheme} />
      <ThemeProvider theme={appTheme}>{children as any}</ThemeProvider>
    </>
  );
};
