import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';

export const StickyHeader: FC<{}> = () => (
  <StickyHeaderContainer>
    <StyledHeaderTitle isCollapsed />
    <StyledNav isCollapsed />
    <Language />
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
`;

const StyledHeaderTitle = styled(HeaderTitle)`
  flex-grow: 1;
`;

const StyledNav = styled(Nav)`
  margin-right: ${({ theme }) => theme.spacings.large};
`;
