import React, { createContext, FC, useState } from 'react';
import { NAV_ITEMS } from '../helpers/constants';
import { TNavItems } from '../types';

export interface IAppContext {
  currentNav: TNavItems;
  setCurrentNav: (nav: TNavItems) => void;
  scrollContainer: HTMLDivElement;
  setScrollContainer: (el: HTMLDivElement) => void;
  darkMode: boolean;
  setDarkMode: (bool: boolean) => void;
}

const isOsDarkMode = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const defaultContext: IAppContext = {
  currentNav: NAV_ITEMS[0],
  setCurrentNav: () => {},
  scrollContainer: null,
  setScrollContainer: () => {},
  darkMode: isOsDarkMode(),
  setDarkMode: () => {},
};

export const AppContext = createContext(defaultContext);

export const AppContextProvider: FC<{}> = ({ children }) => {
  const [currentNav, setCurrentNav] = useState(defaultContext.currentNav);
  const [scrollContainer, setScrollContainer] = useState(
    defaultContext.scrollContainer,
  );
  const [darkMode, setDarkMode] = useState(defaultContext.darkMode);

  const contextValue = {
    currentNav,
    setCurrentNav: (nav: TNavItems) => setCurrentNav(nav),
    scrollContainer,
    setScrollContainer: (el: HTMLDivElement) => setScrollContainer(el),
    darkMode,
    setDarkMode: (bool: boolean) => setDarkMode(bool),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
