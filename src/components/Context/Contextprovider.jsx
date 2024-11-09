import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppStateContext = ({ children }) => {
  const savedMode = localStorage.getItem("darkMode") === true;
  const [mode, setMode] = useState(savedMode);

  return <AppContext.Provider>{children}</AppContext.Provider>;
};
