import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ContentWidth } from './components/commons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StickyHeader } from './components/Header/StickyHeader';
import { ScrollContainer } from './components/ScrollContainer';
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
            <BorderContainer>
              <ScrollContainer>
                <Header />
                <StickyHeader />
                <ContentContainer>
                  <About />
                  <Skills />
                  <Experience />
                  <Contact />
                </ContentContainer>
                <Footer />
              </ScrollContainer>
            </BorderContainer>
          </ThemeProvider>
        </AppContextProvider>
      </>
    );
  }
}

const CONTENT_SPACING_TOP = 300;

const BorderContainer = styled.div`
  height: 100vh;
  border: ${({ theme }) => `${theme.spacings.small} solid`};
  border-color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-top: ${({ theme }) => theme.spacings.large};
    border: ${({ theme }) => `${theme.spacings.tiny} solid`};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ContentContainer = styled(ContentWidth)`
  padding-top: ${CONTENT_SPACING_TOP}px;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-top: 0;
  }
`;
