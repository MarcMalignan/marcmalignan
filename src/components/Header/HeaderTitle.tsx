import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ColoredFirstLetter } from '../ColoredFirstLetter';

export const HeaderTitle: FC<{}> = () => (
  <TitleContainer>
    <Title>
      <ColoredFirstLetter label="Marc" />
      <br />
      <ColoredFirstLetter label="Malignan" />
    </Title>
  </TitleContainer>
);

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
`;
