import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ContentWidth } from '../commons';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';

export const Header: FC<{}> = () => (
  <HeaderContainer>
    <HeaderContent>
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

const StyledLanguage = styled(Language)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};
`;
