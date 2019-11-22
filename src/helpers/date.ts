import { useTranslation } from 'react-i18next';

export const formatDate = (dateStr: string) => {
  const { i18n } = useTranslation();

  const date = new Date(dateStr);
  const month = date.toLocaleString(i18n.language, {
    month: 'short',
  });

  return `${month} ${date.getFullYear()}`;
};

export const formatDateStartEnd = (start: string, end?: string) => {
  const { t } = useTranslation();

  const startDate = formatDate(start);
  if (!end) return `${t('date.since')} ${startDate}`;

  if (start === end) return startDate;

  const endDate = formatDate(end);
  return `${startDate} - ${endDate}`;
};
