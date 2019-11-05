import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ContentWidth } from '../commons';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';

export const Header: FC<{}> = () => (
  <HeaderContainer>
    <ContentWidth>
      <HeaderTitle />
      <Nav />
      <StyledLanguage />
    </ContentWidth>
  </HeaderContainer>
);

const HeaderContainer = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => `0 0 ${theme.spacings.large} ${theme.colors.shadow}`};
`;

const StyledLanguage = styled(Language)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};
`;
