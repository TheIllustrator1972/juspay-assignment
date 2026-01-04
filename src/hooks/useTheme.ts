import { useState, useEffect } from "react";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const;

type ThemeValue = (typeof THEME)[keyof typeof THEME];

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeValue>(THEME.LIGHT);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeValue | null;
    const initialTheme = savedTheme || THEME.LIGHT;
    setTheme(initialTheme);

    if (initialTheme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK);
    } else {
      document.documentElement.classList.remove(THEME.DARK);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);

    if (newTheme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK);
    } else {
      document.documentElement.classList.remove(THEME.DARK);
    }

    localStorage.setItem("theme", newTheme);
  };
  return { theme, toggleTheme };
};
