import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ColoredFirstLetter } from '../ColoredFirstLetter';

interface IHeaderTitleProps {
  className?: string;
  isCollapsed?: boolean;
}

export const HeaderTitle: FC<IHeaderTitleProps> = ({
  className,
  isCollapsed = false,
}) => {
  const TitleElement = isCollapsed ? TitleCollapsed : TitleFull;

  return (
    <div className={className}>
      <TitleElement>
        <ColoredFirstLetter label="Marc" />
        {isCollapsed ? ' ' : <br />}
        <ColoredFirstLetter label="Malignan" />
      </TitleElement>
    </div>
  );
};

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
`;
const TitleFull = styled(Title)`
  padding: ${({ theme }) => theme.spacings.large};
  font-size: 5em;
  line-height: 0.9em;
`;
const TitleCollapsed = styled(Title)`
  font-size: 2em;
`;
