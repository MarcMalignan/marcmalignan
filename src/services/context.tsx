import React, { createContext, FC, useState } from 'react';
import { ENavItems } from '../types';

export interface IAppContext {
  currentNav: ENavItems;
  setCurrentNav: (nav: ENavItems) => void;
}

const defaultContext: IAppContext = {
  currentNav: ENavItems.ABOUT,
  setCurrentNav: () => {},
};

export const AppContext = createContext(defaultContext);

export const AppContextProvider: FC<{}> = ({ children }) => {
  const [currentNav, setCurrentNav] = useState(defaultContext.currentNav);

  const contextValue = {
    currentNav,
    setCurrentNav: (nav: ENavItems) => setCurrentNav(nav),
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
