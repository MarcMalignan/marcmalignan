import React, { createContext, FC, useState } from 'react';
import { ENavItems } from '../types';

export interface IAppContext {
  currentNav: ENavItems;
  setCurrentNav: (nav: ENavItems) => void;
  scrollContainer: HTMLDivElement;
  setScrollContainer: (el: HTMLDivElement) => void;
}

const defaultContext: IAppContext = {
  currentNav: ENavItems.ABOUT,
  setCurrentNav: () => {},
  scrollContainer: null,
  setScrollContainer: () => {},
};

export const AppContext = createContext(defaultContext);

export const AppContextProvider: FC<{}> = ({ children }) => {
  const [currentNav, setCurrentNav] = useState(defaultContext.currentNav);
  const [scrollContainer, setScrollContainer] = useState(
    defaultContext.scrollContainer,
  );

  const contextValue = {
    currentNav,
    setCurrentNav: (nav: ENavItems) => setCurrentNav(nav),
    scrollContainer,
    setScrollContainer: (el: HTMLDivElement) => setScrollContainer(el),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
