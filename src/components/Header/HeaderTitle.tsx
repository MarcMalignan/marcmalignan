import React, { FC, useCallback, useContext } from 'react';
import { AppContext } from '../../services/context';
import { styled } from '../../style/styled';
import { ColoredFirstLetter } from '../commons';

interface IHeaderTitleProps {
  className?: string;
  isCollapsed?: boolean;
}

export const HeaderTitle: FC<IHeaderTitleProps> = ({
  className,
  isCollapsed = false,
}) => {
  const { scrollContainer } = useContext(AppContext);

  const scrollToTop = useCallback(() => {
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [scrollContainer]);

  const TitleElement = isCollapsed ? TitleCollapsed : TitleFull;

  return (
    <div className={className}>
      <TitleElement onClick={scrollToTop}>
        <ColoredFirstLetter>Marc</ColoredFirstLetter>
        {isCollapsed ? ' ' : <br />}
        <ColoredFirstLetter>Malignan</ColoredFirstLetter>
      </TitleElement>
    </div>
  );
};

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 600;
  cursor: pointer;
  user-select: none;
`;
const TitleFull = styled(Title)`
  padding: ${({ theme }) => theme.spacings.large};
  font-size: 5em;
  line-height: 0.9em;
`;
const TitleCollapsed = styled(Title)`
  font-size: 2em;
  white-space: nowrap;
`;
