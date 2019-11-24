import React, { FC, useCallback, useContext } from 'react';
import { styled } from '../../style/theme';
import { ColoredFirstLetter } from '../ColoredFirstLetter';
import { AppContext } from '../../services/context';

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
  cursor: pointer;
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
