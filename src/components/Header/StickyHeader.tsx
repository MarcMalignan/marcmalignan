import React, { FC } from 'react';
import { styled } from '../../style/styled';
import { BurgerMenu } from './BurgerMenu';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';
import { ThemeSelector } from './ThemeSelector';

export const StickyHeader: FC<{}> = () => (
  <StickyHeaderContainer>
    <StyledHeaderTitle isCollapsed />
    <StyledNav isCollapsed />
    <StyledThemeSelector />
    <StyledLanguage />
    <StyledBurgerMenu />
  </StickyHeaderContainer>
);

const StickyHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.small};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    `0 0 ${theme.spacings.medium} ${theme.colors.shadow}`};
  transition: opacity ${({ theme }) => theme.speeds.fast};
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    position: fixed;
    top: ${({ theme }) => theme.spacings.tiny};
    left: ${({ theme }) => theme.spacings.tiny};
    right: ${({ theme }) => theme.spacings.tiny};
  }
`;

const StyledHeaderTitle = styled(HeaderTitle)`
  flex-grow: 1;
`;

const StyledNav = styled(Nav)`
  margin-right: ${({ theme }) => theme.spacings.large};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledThemeSelector = styled(ThemeSelector)`
  margin-right: ${({ theme }) => theme.spacings.medium};

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledLanguage = styled(Language)`
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledBurgerMenu = styled(BurgerMenu)`
  display: none;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: initial;
  }
`;
