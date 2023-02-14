import React from "react";

const theme = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

const ThemeContext = React.createContext(theme);

type ContextType = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextType) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ContextProvider;

export const GlobalStates = () => React.useContext(ThemeContext);
