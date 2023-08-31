import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({ children, startingTheme }) {
  const [theme, setTheme] = useState(startingTheme);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
