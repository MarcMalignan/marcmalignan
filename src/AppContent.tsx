/* eslint-disable object-curly-newline */
import React, { FC, UIEvent, useCallback, useState } from 'react';
import { ContentWidth } from './components/commons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeaderCollapsed } from './components/Header/HeaderCollapsed';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { styled } from './style/theme';

const HEADER_HEIGHT = 339;

export const AppContent: FC<{}> = () => {
  const [shouldShowCollapsedHeader, setCollapsedHeader] = useState(false);

  const onScroll = useCallback(
    (e: UIEvent<HTMLElement>) => {
      if (
        !shouldShowCollapsedHeader &&
        e.currentTarget.scrollTop > HEADER_HEIGHT
      ) {
        setCollapsedHeader(true);
      } else if (
        shouldShowCollapsedHeader &&
        e.currentTarget.scrollTop < HEADER_HEIGHT
      ) {
        setCollapsedHeader(false);
      }
    },
    [shouldShowCollapsedHeader],
  );

  return (
    <AppContainer onScroll={onScroll}>
      <Header />
      <HeaderCollapsed isDisplayed={shouldShowCollapsedHeader} />
      <ContentContainer>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.fontPrimary};
  border: ${({ theme }) =>
    `${theme.spacings.small} solid ${theme.colors.accent}`};
  overflow: auto;
`;

const ContentContainer = styled(ContentWidth)`
  padding-top: ${({ theme }) => theme.spacings.huge};
  padding-bottom: ${({ theme }) => theme.spacings.huge};
`;
