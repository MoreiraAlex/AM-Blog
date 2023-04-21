'use client';
import { HeaderContext } from '@/context/headerProvider';
import { useContext, useEffect } from 'react';

interface Iprops {
  title: string;
  subtitle: string;
  styles: string;
  keyword: string;
  description: string;
}

export default function BannerParams({
  title,
  subtitle,
  styles,
  keyword,
  description,
}: Iprops) {
  const { setParams } = useContext(HeaderContext);
  useEffect(() => {
    setParams?.([title, subtitle, styles, keyword, description]);
  }, [title, subtitle, styles, keyword, description]);
}
