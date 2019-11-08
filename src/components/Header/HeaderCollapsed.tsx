import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { HeaderTitle } from './HeaderTitle';
import { Language } from './Language';
import { Nav } from './Nav';

interface IHeaderCollapsedProps {
  isDisplayed: boolean;
}

export const HeaderCollapsed: FC<IHeaderCollapsedProps> = ({ isDisplayed }) => (
  <HeaderCollapsedContainer isDisplayed={isDisplayed}>
    <HeaderTitle isCollapsed />
    <Nav isCollapsed />
    <Language />
  </HeaderCollapsedContainer>
);

const HeaderCollapsedContainer = styled.div<{ isDisplayed: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.spacings.small};
  left: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.small};
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    `0 0 ${theme.spacings.medium} ${theme.colors.shadow}`};
  opacity: ${({ isDisplayed }) => (isDisplayed ? '1' : '0')};
  transition: opacity ${({ theme }) => theme.speeds.fast};
  pointer-events: ${({ isDisplayed }) => (isDisplayed ? 'initial' : 'none')};
`;
