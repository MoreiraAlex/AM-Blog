'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface Iprops {
  title: string;
  subtitle: string;
  styles: string;
  keyword: string;
  description: string;
}

type headerContextType = {
  params?: string[];
  HeaderParams?: ({}: Iprops) => void;
};

const HeaderContext = createContext<headerContextType>({});

export function UseHeaderContext() {
  return useContext(HeaderContext);
}

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState(['']);

  function HeaderParams({
    title,
    subtitle,
    styles,
    keyword,
    description,
  }: Iprops) {
    const parameters = [title, subtitle, styles, keyword, description];
    setParams(parameters);
  }

  return (
    <HeaderContext.Provider value={{ params, HeaderParams }}>
      {children}
    </HeaderContext.Provider>
  );
}
