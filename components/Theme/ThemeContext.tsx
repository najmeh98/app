import React, { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { Theme } from "../types/theme";
import { darkTheme, lightTheme } from "../utils/theme";

type ContextType = DefaultTheme;

const initialValue: ContextType = { lightTheme };
export const ThemeContext = createContext<ContextType>({ initialValue });

export const UseThemeManager = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(lightTheme);

  let themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

// استیت تعریف کنم

// نوع تم از لوکال استوریج دربیارم

//
