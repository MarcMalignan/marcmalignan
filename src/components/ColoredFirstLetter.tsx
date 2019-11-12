import React, { FC } from 'react';

interface IColoredFirstLetterProps {
  label: string;
}

export const ColoredFirstLetter: FC<IColoredFirstLetterProps> = ({ label }) => {
  const [firstLetter, ...rest] = label;
  return (
    <span>
      <i>{firstLetter}</i>
      {rest}
    </span>
  );
};
