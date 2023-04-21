'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';

type themeContextType = {
  theme?: string;
  setTheme?: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<themeContextType>({});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
