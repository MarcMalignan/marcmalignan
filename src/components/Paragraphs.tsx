import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from './commons';

interface IParagraphsProps {
  translationKey: string;
}

export const Paragraphs: FC<IParagraphsProps> = ({ translationKey }) => {
  const { i18n } = useTranslation();

  const translation = i18n.t(translationKey, { returnObjects: true }) as
    | string
    | string[];
  const translationArray = Array.isArray(translation)
    ? translation
    : [translation];

  return <>{translationArray.map(renderParagraph(translationKey))}</>;
};

const renderParagraph = (translationKey: string) => (
  label: string,
  index: number,
) => (
  <Paragraph
    dangerouslySetInnerHTML={{ __html: label }}
    key={`${translationKey}-${index}`}
  />
);
