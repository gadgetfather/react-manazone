import { createContext, useContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

const useTheme = () => useContext(themeContext);

export { useTheme, ThemeProvider };
