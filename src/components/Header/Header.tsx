import React, { FC } from 'react';
import { styled } from '../../style/styled';
import { ContentWidth } from '../commons';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';
import { ThemeSelector } from './ThemeSelector';

export const Header: FC<{}> = () => (
  <HeaderContainer>
    <HeaderContent>
      <StyledThemeSelector />
      <StyledHeaderTitle />
      <StyledNav />
      <StyledLanguage />
    </HeaderContent>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: none;
  }
`;

const HeaderContent = styled(ContentWidth)`
  padding: 0;
`;

const StyledHeaderTitle = styled(HeaderTitle)`
  display: flex;
  justify-content: center;
`;

const StyledNav = styled(Nav)`
  justify-content: center;
  margin: 0 auto;
`;

const StyledThemeSelector = styled(ThemeSelector)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  left: ${({ theme }) => theme.spacings.small};
`;

const StyledLanguage = styled(Language)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};
`;
