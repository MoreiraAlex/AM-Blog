'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type categoryContextType = {
  isVisible?: boolean;
  False?: () => void;
  True?: () => void;
};

const CategoryContext = createContext<categoryContextType>({});

export function UseCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisibleOpen] = useState(false);

  function False() {
    setIsVisibleOpen(false);
    return 'False';
  }

  function True() {
    setIsVisibleOpen(true);
  }

  return (
    <CategoryContext.Provider value={{ isVisible, False, True }}>
      {children}
    </CategoryContext.Provider>
  );
}
