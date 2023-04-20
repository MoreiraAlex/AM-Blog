'use client';
import Link from 'next/link';
import { BiSearch, BiMenu, BiX } from 'react-icons/bi';
import { BsLightbulbFill } from 'react-icons/bs';
import { Logo } from './logo';
import { use, useContext, useState } from 'react';
import Icon from './icon';
import { SetThemeContext, ThemeContext } from '@/lib/themeProvider';

export const Navbar = () => {
  const [menu, setMenu] = useState(false);

  function toggleTheme(theme: string): string {
    if (theme === 'dark') return 'light';
    return 'dark';
  }

  const theme = useContext(ThemeContext);
  const setTheme = useContext(SetThemeContext);

  return (
    <nav>
      <div className='container mx-auto flex justify-between items-center relative'>
        <Logo />
        <Icon
          tail={`w-10 h-10 p-3 ${
            theme == 'light' ? 'text-white hover:text-black' : ''
          }`}
          func={() => {
            setTheme(toggleTheme(theme));
          }}
        >
          <BsLightbulbFill />
        </Icon>

        <div className='hidden sm:flex items-center space-x-16'>
          <Link href='#'>
            <Icon tail='text-sm font-bold py-2 px-5'>Contato</Icon>
          </Link>
          <Icon
            tail='w-10 h-10 p-3'
            func={() => {
              setMenu(true);
            }}
          >
            <BiSearch />
          </Icon>
        </div>
        <Icon tail='w-10 h-10 p-3 sm:hidden'>
          <BiMenu onClick={() => setMenu(true)} />
        </Icon>
      </div>
      <div
        className={`${
          menu ? 'block' : 'hidden'
        } bg-ligth-primary-100 w-screen h-screen inset-0 z-50 dark:bg-dark-basic-100 fixed`}
      >
        <div className='flex flex-col items-end space-y-32 container mx-auto pt-4'>
          <Icon
            tail='w-10 h-10 p-3 text-center bg-white'
            func={() => {
              setMenu(false);
            }}
          >
            <BiX />
          </Icon>
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
                    required
                    placeholder='Titulos, palavras chaves ou categorias...'
                    className='rounded-3xl h-16 sm:w-8/12 px-5 w-full outline-none'
                  />
                </label>
                <button
                  className='rounded-3xl h-16 w-full sm:w-3/12 bg-ligth-primary-200 text-white font-bold uppercase hover:text-ligth-primary-100 duration-300
                            dark:bg-ligth-primary-100 dark:text-black  hover:dark:bg-ligth-primary-200 hover:dark:text-white'
                >
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
