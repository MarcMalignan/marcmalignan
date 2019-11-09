import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ContentWidth } from '../commons';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';

export const Header: FC<{}> = () => (
  <HeaderContainer>
    <ContentWidth>
      <StyledHeaderTitle />
      <StyledNav />
      <StyledLanguage />
    </ContentWidth>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  position: relative;
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
