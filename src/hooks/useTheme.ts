import { useState } from 'react';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

let initialTheme = THEMES.LIGHT;
if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
)
  initialTheme = THEMES.DARK;

const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(initialTheme);
  const themeSwitcher = () => {
    theme === THEMES.LIGHT ? setTheme(THEMES.DARK) : setTheme(THEMES.LIGHT);
  };
  return [theme, themeSwitcher];
};

export default useTheme;
