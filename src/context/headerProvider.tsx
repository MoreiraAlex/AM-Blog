'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type Iprops = [
  title: string,
  subtitle: string,
  styles: string,
  keyword: string,
  description: string
];

type headerContextType = {
  params?: Iprops;
  setParams?: Dispatch<SetStateAction<Iprops>>;
};

export const HeaderContext = createContext<headerContextType>({});

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState<Iprops>(['', '', '', '', '']);

  return (
    <HeaderContext.Provider value={{ params, setParams }}>
      {children}
    </HeaderContext.Provider>
  );
}
