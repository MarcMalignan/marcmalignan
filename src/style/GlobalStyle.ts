import { createGlobalStyle } from 'styled-components';
import { TAppTheme } from './theme';

interface IGlobalStyle {
  theme: TAppTheme;
}

const SCROLLBAR_WIDTH = 5;

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:600&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    margin: 0;
  }

  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH * 3}px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border: ${({ theme }) => `${SCROLLBAR_WIDTH}px solid ${theme.colors.background}`};
  }
`;
