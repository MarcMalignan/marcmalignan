import React, { FC } from 'react';
import { ColoredFirstLetter } from '../components/ColoredFirstLetter';
import { Title } from '../components/commons';
import { styled } from '../style/theme';

interface ISectionProps {
  title: string;
}

export const Section: FC<ISectionProps> = ({ children, title }) => (
  <SectionContainer>
    <Title>
      <ColoredFirstLetter label={title} />
    </Title>
    {children}
  </SectionContainer>
);

const SectionContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.huge};

  &:last-child {
    margin-bottom: 0;
  }
`;
