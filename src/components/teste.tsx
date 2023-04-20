'use client';
import { UseHeaderContext } from '@/lib/headerProvider';
import { useEffect } from 'react';

interface Iprops {
  title: string;
  subtitle: string;
  styles: string;
  keyword: string;
  description: string;
}

export default function Teste({
  title,
  subtitle,
  styles,
  keyword,
  description,
}: Iprops) {
  const { HeaderParams } = UseHeaderContext();
  const parameters = {
    title: title,
    keyword: keyword,
    subtitle: subtitle,
    description: description,
    styles: styles,
  };
  useEffect(() => {
    HeaderParams?.(parameters);
  }, []);
}
