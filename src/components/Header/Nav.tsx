import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { styled } from '../../style/theme';

export const Nav: FC<{}> = () => {
  const { t } = useTranslation();
  return (
    <NavContainer>
      <NavItem>{t('nav.about')}</NavItem>
      <NavItem>{t('nav.skills')}</NavItem>
      <NavItem>{t('nav.experience')}</NavItem>
      <NavItem>{t('nav.contact')}</NavItem>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const NavItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  padding: ${({ theme }) => theme.spacings.medium};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 1.8em;
  text-align: center;
  white-space: nowrap;
  transition: color ${({ theme }) => theme.speeds.normal};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
