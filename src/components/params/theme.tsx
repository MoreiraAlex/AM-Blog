'use client';
import { ThemeContext } from '@/context/themeProvider';
import { ReactNode, useContext } from 'react';

export default function Theme({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
}
