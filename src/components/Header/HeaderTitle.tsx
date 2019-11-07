import React, { FC } from 'react';
import { styled } from '../../style/theme';
import { ColoredFirstLetter } from '../ColoredFirstLetter';

interface IHeaderTitleProps {
  isCollapsed?: boolean;
}

export const HeaderTitle: FC<IHeaderTitleProps> = ({ isCollapsed = false }) => {
  const TitleContainerElement = isCollapsed ? TitleContainerCollapsed : TitleContainerFull;
  const TitleElement = isCollapsed ? TitleCollapsed : TitleFull;

  return (
    <TitleContainerElement>
      <TitleElement>
        <ColoredFirstLetter label="Marc" />
        {isCollapsed ? ' ' : <br />}
        <ColoredFirstLetter label="Malignan" />
      </TitleElement>
    </TitleContainerElement>
  );
};

const TitleContainerFull = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleContainerCollapsed = styled.div``;

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
`;
const TitleFull = styled(Title)`
  padding: ${({ theme }) => theme.spacings.large};
  font-size: 5em;
  line-height: 0.9em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const TitleCollapsed = styled(Title)`
  font-size: 2em;
`;
