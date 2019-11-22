import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ColoredFirstLetter } from '../components/ColoredFirstLetter';
import { Title } from '../components/commons';
import { styled } from '../style/theme';

interface ISectionProps {
  id: string;
}

export const Section: FC<ISectionProps> = ({ children, id }) => {
  const { t } = useTranslation();

  return (
    <SectionContainer id={id} className="section">
      <Title>
        <ColoredFirstLetter label={t(`nav.${id}`)} />
      </Title>
      {children}
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  padding: ${({ theme }) => theme.spacings.huge} 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent2};
`;
