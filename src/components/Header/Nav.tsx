import React, { FC, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_ITEMS } from '../../helpers/constants';
import { AppContext } from '../../services/context';
import { styled } from '../../style/styled';
import { TNavItems } from '../../types';

interface INavProps {
  className?: string;
  isCollapsed?: boolean;
}

const scrollToSection = (id: string) => {
  document.getElementById(id).scrollIntoView(true);
};

export const Nav: FC<INavProps> = ({ className, isCollapsed = false }) => {
  const { t } = useTranslation();
  const { currentNav, scrollContainer } = useContext(AppContext);

  const onNavItemClick = useCallback(
    (navItem: TNavItems) => () => {
      if (navItem === NAV_ITEMS[0]) {
        scrollContainer.scrollTo(0, 0);
      } else {
        scrollToSection(navItem);
      }
    },
    [scrollContainer],
  );

  const renderNavItem = useCallback(
    (navItem: TNavItems) => {
      const NavItemElement = isCollapsed ? NavItemCollapsed : NavItemFull;
      return (
        <NavItemElement
          key={navItem}
          isSelected={currentNav === navItem}
          onClick={onNavItemClick(navItem)}
        >
          {t(`nav.${navItem}`)}
        </NavItemElement>
      );
    },
    [currentNav],
  );

  return (
    <NavContainer className={className}>
      {NAV_ITEMS.map(renderNavItem)}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    display: initial;
  }
`;

const NavItem = styled.div<{ isSelected?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border-bottom: ${({ theme }) => theme.spacings.line} solid;
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.accent2};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.font};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    border: none;
  }
`;
const NavItemFull = styled(NavItem)`
  flex-grow: 1;
  flex-basis: 0;
  padding: ${({ theme }) => theme.spacings.medium};
  padding-top: 0;
  font-size: 1.6em;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding-top: ${({ theme }) => theme.spacings.medium};
  }
`;
const NavItemCollapsed = styled(NavItem)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ theme }) => theme.spacings.large};
  padding: 0 ${({ theme }) => theme.spacings.medium};
  font-size: 1.2em;
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.background};
`;
