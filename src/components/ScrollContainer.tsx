import React, {
  FC,
  useCallback,
  useContext,
  useEffect,
  createRef,
} from 'react';
import { AppContext } from '../services/context';
import { styled } from '../style/theme';
import { TNavItems } from '../types';

export const ScrollContainer: FC<{}> = ({ children }) => {
  const { setCurrentNav, setScrollContainer } = useContext(AppContext);

  const ref = createRef<HTMLDivElement>();
  useEffect(() => setScrollContainer(ref.current), []);

  const onScroll = useCallback(() => {
    const visibleSectionId = getVisibleSectionId();
    setCurrentNav(visibleSectionId as TNavItems);
  }, []);

  return (
    <Container id="scrollContainer" onScroll={onScroll} ref={ref}>
      {children}
    </Container>
  );
};

const getVisibleSectionId = () => {
  const windowHeight = window.innerHeight;
  const sections = document.getElementsByClassName('section');

  const visibleSections = Array.from(sections).filter(section => {
    const title = section.getElementsByTagName('h2')[0];
    const rect = title.getBoundingClientRect();
    return rect.top < windowHeight;
  });

  return visibleSections[visibleSections.length - 1].id;
};

const Container = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
