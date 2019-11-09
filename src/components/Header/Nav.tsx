import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext, IAppContext } from '../../services/context';
import { styled } from '../../style/theme';
import { ENavItems } from '../../types';

interface INavProps {
  isCollapsed?: boolean;
}

export const Nav: FC<INavProps> = ({ isCollapsed = false }) => {
  const { t } = useTranslation();

  const NavContainerElement = isCollapsed
    ? NavContainerCollapsed
    : NavContainerFull;
  const NavItemElement = isCollapsed ? NavItemCollapsed : NavItemFull;

  const onNavItemClick = useCallback(
    (context: IAppContext, navItem: ENavItems) => () =>
      context.setCurrentNav(navItem),
    [],
  );

  const renderNavItem = useCallback(
    (context: IAppContext) => (navItem: ENavItems) => (
      <NavItemElement
        key={navItem}
        isSelected={context.currentNav === navItem}
        onClick={onNavItemClick(context, navItem)}
      >
        {t(`nav.${navItem}`)}
      </NavItemElement>
    ),
    [],
  );

  return (
    <AppContext.Consumer>
      {context => (
        <NavContainerElement>
          {Object.values(ENavItems).map(renderNavItem(context))}
        </NavContainerElement>
      )}
    </AppContext.Consumer>
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
