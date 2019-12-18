import React, {
  createRef,
  FC,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { NAV_ITEMS } from '../helpers/constants';
import { AppContext } from '../services/context';
import { styled } from '../style/styled';
import { TNavItems } from '../types';

export const ScrollContainer: FC<{}> = ({ children }) => {
  const { setCurrentNav, setScrollContainer } = useContext(AppContext);

  const ref = createRef<HTMLDivElement>();
  useEffect(() => setScrollContainer(ref.current), []);

  const onScroll = useCallback(() => {
    if (ref.current && ref.current.scrollTop === 0) {
      setCurrentNav(NAV_ITEMS[0]);
    } else {
      const visibleSectionId = getVisibleSectionId();
      setCurrentNav(visibleSectionId as TNavItems);
    }
  }, [ref]);

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
