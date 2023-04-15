'use client';
import Link from 'next/link';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi';
import { Logo } from './logo';
import { useState } from 'react';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav>
      <div className='container mx-auto flex justify-between items-center p-5 relative'>
        <Logo />
        <div className='hidden sm:flex items-center space-x-16'>
          <Link
            href='#'
            className='text-sm font-bold bg-ligth-theme-100 rounded-3xl py-2 px-5 hover:text-white hover:bg-ligth-theme-200 duration-300'
          >
            Contato
          </Link>
          <BiSearch
            className='w-10 h-10 bg-ligth-theme-100 rounded-full p-3 hover:text-white hover:bg-ligth-theme-200 duration-300 hover:cursor-pointer'
            onClick={() => setMenu(true)}
          />
        </div>
        <BiMenu
          className='w-10 h-10 bg-ligth-theme-100 rounded-full p-3 sm:hidden hover:text-white hover:bg-ligth-theme-200 duration-300 hover:cursor-pointer'
          onClick={() => setMenu(true)}
        />
      </div>
      <div
        className={`${
          menu ? 'block' : 'hidden'
        } bg-ligth-theme-100 w-screen h-screen absolute inset-0 z-50 `}
      >
        <div className='flex flex-col items-end p-5 space-y-32 container mx-auto'>
          <BiX
            className='w-10 h-10 rounded-full p-3 border m-0 border-black text-center'
            onClick={() => setMenu(false)}
          />
          <div className='mx-auto space-y-10'>
            <Link href='#' className='sm:hidden text-3xl'>
              Contato
            </Link>
            <hr className='sm:hidden' />
            <div className='flex flex-col space-y-10 self-center'>
              <h2 className='text-3xl'>
                Procurando por algum artigo específico?
              </h2>
              <form className='sm:space-x-2 space-y-5'>
                <label>
                  <input
                    type='text'
                    placeholder='Titulos, palavras chaves ou categorias...'
                    className='rounded-3xl h-16 sm:w-8/12 px-5 w-full outline-none'
                  />
                </label>
                <button className='rounded-3xl h-16 w-full sm:w-3/12 bg-ligth-theme-200 text-white font-bold uppercase'>
                  Procurar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
