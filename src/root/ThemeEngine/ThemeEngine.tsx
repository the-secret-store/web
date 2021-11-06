import { createContext, useContext } from 'react';
import './styles/root.scss';
import { theme } from './values';

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => useContext(ThemeContext);

export function ThemeEngine({ children }: ThemeEngineProps) {
  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}

interface ThemeEngineProps {
  children: React.ReactNode;
}

interface Theme {
  colors: {
    primary: {
      color: string;
      contrast: string;
    };
    error: string;
    success: string;
    info: string;
    darkGrey: string;
    lightGrey: string;
    slate: string;
  };
  fontFamily: string;
}
