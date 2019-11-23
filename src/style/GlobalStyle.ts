/* eslint-disable @typescript-eslint/indent */
import { createGlobalStyle } from 'styled-components';
import { TAppTheme } from './theme';

interface IGlobalStyle {
  theme: TAppTheme;
}

const SCROLLBAR_WIDTH = 2;
const SCROLLBAR_SPACING = 5;

export const GlobalStyle = createGlobalStyle<IGlobalStyle>`
  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:600&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    font-family: ${({ theme }) => theme.fonts.text};
    color: ${({ theme }) => theme.colors.fontPrimary};
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
  }

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }

  ::-webkit-scrollbar {
    width: ${SCROLLBAR_WIDTH + SCROLLBAR_SPACING * 2}px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border: ${({ theme }) =>
      `${SCROLLBAR_SPACING}px solid ${theme.colors.background}`};
  }
`;
