import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContentWidth } from './components/commons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { initLanguage } from './services/language';
import { GlobalStyle } from './style/GlobalStyle';
import { appTheme, styled } from './style/theme';

export class App extends Component<{}> {
  constructor() {
    super({});
    initLanguage();
  }

  render() {
    return (
      <ThemeProvider theme={appTheme}>
        <AppContainer>
          <GlobalStyle theme={appTheme} />
          <Header />
          <ContentContainer>
            <About />
            <Skills />
            <Experience />
            <Contact />
          </ContentContainer>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

const AppContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.fontPrimary};
  border: ${({ theme }) => `${theme.spacings.small} solid ${theme.colors.accent}`};
  overflow: auto;
`;

const ContentContainer = styled(ContentWidth)`
  padding-top: ${({ theme }) => theme.spacings.huge};
  padding-bottom: ${({ theme }) => theme.spacings.huge};
`;
