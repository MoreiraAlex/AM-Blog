'use client';
import { ThemeContext } from '@/lib/themeProvider';
import { ReactNode, useContext } from 'react';

export default function Theme({ children }: { children: ReactNode }) {
  const theme = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
}
