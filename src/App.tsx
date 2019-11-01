import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { GlobalStyle } from './style/GlobalStyle';
import { appTheme, styled } from './style/theme';

export const App: FC<{}> = () => (
  <ThemeProvider theme={appTheme}>
    <AppContainer>
      <GlobalStyle theme={appTheme} />
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

const AppContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.fontPrimary};
  border: ${({ theme }) => `${theme.spacings.small} solid ${theme.colors.accent}`};
  overflow: auto;
`;
