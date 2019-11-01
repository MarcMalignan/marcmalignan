import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { appTheme, styled } from './style/theme';
import { GlobalStyle } from './style/GlobalStyle';

export const App: FC<{}> = () => (
  <ThemeProvider theme={appTheme}>
    <AppContainer>
      <GlobalStyle />
      <Header />
    </AppContainer>
  </ThemeProvider>
);

const AppContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacings.big};
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.fontColor};
`;
