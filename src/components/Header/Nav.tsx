import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '../../style/theme';

interface INavProps {
  isCollapsed?: boolean;
}

export const Nav: FC<INavProps> = ({ isCollapsed = false }) => {
  const { t } = useTranslation();

  const NavContainerElement = isCollapsed
    ? NavContainerCollapsed
    : NavContainerFull;
  const NavItemElement = isCollapsed ? NavItemCollapsed : NavItemFull;

  return (
    <NavContainerElement>
      <NavItemElement isSelected>{t('nav.about')}</NavItemElement>
      <NavItemElement>{t('nav.skills')}</NavItemElement>
      <NavItemElement>{t('nav.experience')}</NavItemElement>
      <NavItemElement>{t('nav.contact')}</NavItemElement>
    </NavContainerElement>
  );
};

const NavContainer = styled.div`
  display: flex;
`;
const NavContainerFull = styled(NavContainer)`
  justify-content: center;
  margin: 0 auto;
`;
const NavContainerCollapsed = styled(NavContainer)``;

const NavItem = styled.div<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: color ${({ theme }) => theme.speeds.normal};
  border-bottom: ${({ theme }) => theme.spacings.line} solid;
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.separator};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.fontPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
const NavItemFull = styled(NavItem)`
  flex-grow: 1;
  flex-basis: 0;
  padding: ${({ theme }) => theme.spacings.medium};
  padding-top: 0;
  font-size: 1.6em;
  text-align: center;
`;
const NavItemCollapsed = styled(NavItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.medium};
  font-size: 1.2em;
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : 'transparent'};
`;
