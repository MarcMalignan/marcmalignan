import React, { FC } from 'react';
import { styled } from '../style/theme';

interface IColoredFirstLetterProps {
  label: string;
}

export const ColoredFirstLetter: FC<IColoredFirstLetterProps> = ({ label }) => {
  const [firstLetter, ...rest] = label;
  return (
    <ColoredFirstLetterContainer>
      <i>{firstLetter}</i>
      {rest}
    </ColoredFirstLetterContainer>
  );
};

const ColoredFirstLetterContainer = styled.span`
  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
