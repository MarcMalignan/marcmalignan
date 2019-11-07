import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContent } from './AppContent';
import { initLanguage } from './services/language';
import { GlobalStyle } from './style/GlobalStyle';
import { appTheme } from './style/theme';

export class App extends Component<{}> {
  constructor() {
    super({});
    initLanguage();
  }

  public render() {
    return (
      <>
        <GlobalStyle theme={appTheme} />
        <ThemeProvider theme={appTheme}>
          <AppContent />
        </ThemeProvider>
      </>
    );
  }
}
