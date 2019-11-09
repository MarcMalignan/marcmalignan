import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContentWidth } from './components/commons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StickyHeader } from './components/Header/StickyHeader';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { AppContextProvider } from './services/context';
import { initLanguage } from './services/language';
import { GlobalStyle } from './style/GlobalStyle';
import { appTheme, styled } from './style/theme';

export class App extends Component<{}> {
  constructor(props: {}) {
    super(props);
    initLanguage();
  }

  public render() {
    return (
      <>
        <GlobalStyle theme={appTheme} />
        <AppContextProvider>
          <ThemeProvider theme={appTheme}>
            <AppContainer>
              <Header />
              <StickyHeader />
              <ContentContainer>
                <About />
                <Skills />
                <Experience />
                <Contact />
              </ContentContainer>
              <Footer />
            </AppContainer>
          </ThemeProvider>
        </AppContextProvider>
      </>
    );
  }
}

const CONTENT_SPACING_TOP = 400;

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.fontPrimary};
  border: ${({ theme }) =>
    `${theme.spacings.small} solid ${theme.colors.accent}`};
  overflow: auto;
`;

const ContentContainer = styled(ContentWidth)`
  padding-top: ${CONTENT_SPACING_TOP}px;
  padding-bottom: ${({ theme }) => theme.spacings.huge};
`;
