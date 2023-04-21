'use client';
import { CategoryContext } from '@/context/categoryProvider';
import { useContext, useEffect } from 'react';

export default function CategoryVisible({ visible }: { visible: boolean }) {
  const { setIsVisibleOpen } = useContext(CategoryContext);
  useEffect(() => {
    setIsVisibleOpen?.(visible);
  }, [visible]);
}
