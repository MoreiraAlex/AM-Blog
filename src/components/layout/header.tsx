'use client';
import { useContext } from 'react';
import Navbar from './navbar';
import { HeaderContext } from '@/context/headerProvider';

export default function Header() {
  const { params } = useContext(HeaderContext);

  return (
    <header className='space-y-10'>
      <Navbar />
      <div
        className={`${params?.[2]} sm:container mx-auto m-4 bg-stone-400 text-center  flex flex-col space-y-8 rounded-2xl items-center md:items-start md:text-left`}
      >
        <h3 className='text-xs uppercase font-bold text-white'>
          {params?.[1]}
        </h3>
        <h2 className='sm:text-5xl text-4xl text-white'>
          {params?.[0]}{' '}
          <strong className='text-ligth-primary-100'>{params?.[3]}</strong>
        </h2>
        <p className='md:text-xl text-white lg:w-5/12'>{params?.[4]}</p>
      </div>
    </header>
  );
}
