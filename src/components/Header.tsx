import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../services/language';
import { styled } from '../style/theme';
import { ContentWidth } from './commons';

export const Header: FC<{}> = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = useCallback((language: LANGUAGES) => () => i18n.changeLanguage(language), []);

  return (
    <HeaderContainer>
      <ContentWidth>
        <TitleContainer>
          <Title>
            <i>M</i>
            arc
            <br />
            <i>M</i>
            alignan
          </Title>
        </TitleContainer>
        <Nav>
          <NavItem>{t('nav.skills')}</NavItem>
          <NavItem>{t('nav.experience')}</NavItem>
          <NavItem>{t('nav.contact')}</NavItem>
        </Nav>
        <LanguageContainer>
          <Language active={i18n.language === LANGUAGES.FR} onClick={changeLanguage(LANGUAGES.FR)}>
            FR
          </Language>
          <Language active={i18n.language === LANGUAGES.EN} onClick={changeLanguage(LANGUAGES.EN)}>
            EN
          </Language>
        </LanguageContainer>
      </ContentWidth>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: relative;
  box-shadow: ${({ theme }) => `0 0 ${theme.spacings.large} ${theme.colors.shadow}`};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: ${({ theme }) => theme.spacings.large};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  font-size: 5em;
  line-height: 0.9em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Nav = styled.div`
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
  font-size: 2em;
  text-align: center;
  cursor: pointer;
  transition: color ${({ theme }) => theme.speeds.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  position: absolute;
  top: ${({ theme }) => theme.spacings.small};
  right: ${({ theme }) => theme.spacings.small};
`;

const Language = styled.div<{ active?: boolean }>`
  width: ${({ theme }) => theme.spacings.medium};
  height: ${({ theme }) => theme.spacings.medium};
  margin-right: ${({ theme }) => theme.spacings.tiny};
  line-height: ${({ theme }) => theme.spacings.medium};
  color: ${({ active, theme }) => (active ? theme.colors.fontSecondary : 'inherit')};
  background: ${({ active, theme }) => (active ? theme.colors.accent : 'transparent')};
  text-align: center;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
