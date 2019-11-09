import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContent } from './AppContent';
import { AppContextProvider } from './services/context';
import { initLanguage } from './services/language';
import { GlobalStyle } from './style/GlobalStyle';
import { appTheme } from './style/theme';

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
            <AppContent />
          </ThemeProvider>
        </AppContextProvider>
      </>
    );
  }
}
