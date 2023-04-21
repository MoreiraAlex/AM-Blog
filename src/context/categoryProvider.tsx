'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type categoryContextType = {
  isVisible?: boolean;
  setIsVisibleOpen?: Dispatch<SetStateAction<boolean>>;
};

export const CategoryContext = createContext<categoryContextType>({});

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisibleOpen] = useState(false);

  return (
    <CategoryContext.Provider value={{ isVisible, setIsVisibleOpen }}>
      {children}
    </CategoryContext.Provider>
  );
}
