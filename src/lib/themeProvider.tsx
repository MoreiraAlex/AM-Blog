'use client';
import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';
import { useTheme } from './useTheme';

export const ThemeContext = createContext<string>('light');
export const SetThemeContext = createContext<Dispatch<SetStateAction<string>>>(
  (value) => {
    console.log('Default function:', value);
  }
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useTheme();

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
