import React, { useState, useContext } from "react";

const ThemeContext = React.createContext<null | {
  user: { name: string; email: string } | null;
  setUser: React.Dispatch<any>;
}>(null);

type ContextType = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextType) => {
  const [user, setUser] = useState<null | { name: string; email: string }>(
    null
  );
  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;

export const GlobalStates = () => React.useContext(ThemeContext);
