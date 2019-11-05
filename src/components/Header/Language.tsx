import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../services/language';
import { styled } from '../../style/theme';

interface ILanguageProps {
  className?: string;
}

export const Language: FC<ILanguageProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const changeLanguage = useCallback((language: LANGUAGES) => () => i18n.changeLanguage(language), []);

  return (
    <LanguageContainer className={className}>
      <LanguageButton active={i18n.language === LANGUAGES.FR} onClick={changeLanguage(LANGUAGES.FR)}>
        FR
      </LanguageButton>
      <LanguageButton active={i18n.language === LANGUAGES.EN} onClick={changeLanguage(LANGUAGES.EN)}>
        EN
      </LanguageButton>
    </LanguageContainer>
  );
};

const LanguageContainer = styled.div`
  display: flex;
`;

const LanguageButton = styled.div<{ active?: boolean }>`
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
