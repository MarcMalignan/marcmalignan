import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../../services/context';
import { styled } from '../../style/styled';

interface IThemeSelectorProps {
  className?: string;
}

export const ThemeSelector: FC<IThemeSelectorProps> = ({ className }) => {
  const { t } = useTranslation();
  const { darkMode, setDarkMode } = useContext(AppContext);

  const switchTheme = useCallback(() => setDarkMode(!darkMode), [darkMode]);

  const icon = darkMode ? faSun : faMoon;
  const title = darkMode ? t('commons.lightTheme') : t('commons.darkTheme');

  return (
    <ThemeSelectorContainer
      className={className}
      onClick={switchTheme}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
    </ThemeSelectorContainer>
  );
};

const ThemeSelectorContainer = styled.div`
  width: ${({ theme }) => theme.spacings.medium};
  height: ${({ theme }) => theme.spacings.medium};
  line-height: ${({ theme }) => theme.spacings.medium};
  font-size: 1.2em;
  text-align: center;
  cursor: pointer;
`;
