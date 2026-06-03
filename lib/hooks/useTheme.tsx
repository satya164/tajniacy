import { useContext } from 'react';
import { ThemeContext } from '@contexts/ThemeContext';

export function useTheme() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    throw new Error("useTheme should be used only in the context of ThemeContext");
  }

  return theme;
}
