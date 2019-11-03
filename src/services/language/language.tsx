import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslations } from './en';
import { frTranslations } from './fr';

export enum LANGUAGES {
  EN = 'en',
  FR = 'fr',
}

export const initLanguage = () =>
  i18next.use(initReactI18next).init({
    resources: {
      en: enTranslations,
      fr: frTranslations,
    },
    lng: LANGUAGES.FR,
  });
