import Link from 'next/link';
import {
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaArrowRight,
} from 'react-icons/fa';
import Icon from '../ui/icon';
import ListMiniPosts from '../ui/listMiniPosts';

export default function SideBar() {
  return (
    <nav className='space-y-10 order-2 col-span-2 xl:col-span-1'>
      <section
        className='shadow-md w-full rounded-2xl bg-white flex items-center justify-center space-x-5 lg:space-x-0 px-4 py-8 lg:flex-col lg:space-y-3
                  dark:bg-dark-basic-100'
      >
        <div className='w-20 h-20 md:w-28 md:h-28 flex-shrink-0 bg-stone-400 rounded-full border-4 border-ligth-primary-100'></div>
        <div className='lg:text-center lg:space-y-3'>
          <div>
            <span className='text-xs font-bold uppercase text-ligth-basic-200'>
              Seu anfitrião
            </span>
            <h2 className='text-2xl font-normal'>Alex Moreira</h2>
          </div>
          <hr className='hidden md:block' />
          <p className='hidden md:block text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            animi dolorem cum nisi eius illum esse culpa ut dolorum ipsum,
            aspernatur ipsam quos ab a rem inventore! Vero, odio consectetur?
          </p>
          <div className='flex items-center justify-center space-x-1 md:justify-start lg:justify-center'>
            <Icon variantes='p-3 w-10 h-10 text-xl flex items-center justify-center'>
              <Link href='#'>
                <FaLinkedinIn />
              </Link>
            </Icon>
            <Icon variantes='p-3 w-10 h-10 text-xl flex items-center justify-center'>
              <Link href='#'>
                <FaBehance />
              </Link>
            </Icon>
            <Icon variantes='p-3 w-10 h-10 text-xl flex items-center justify-center'>
              <Link href='#'>
                <FaGithub />
              </Link>
            </Icon>
          </div>
        </div>
      </section>

      <section className='shadow-md w-full rounded-2xl bg-white mx-auto text-left px-4 py-8 space-y-5 dark:bg-dark-basic-100'>
        <h2 className='text-3xl font-bold'>Newsletter</h2>
        <hr></hr>
        <p className='text-sm '>Receba notificações de novas postagens!</p>
        <form className='space-y-3 flex flex-col'>
          <input
            type='text'
            placeholder='Email'
            className='h-10 border-2 border-ligth-basic-200 rounded-3xl px-5 outline-none text-ligth-basic-300'
          />
          <button
            className='rounded-3xl h-10 bg-ligth-primary-100 font-bold hover:text-white hover:bg-ligth-primary-200 duration-300 
                    dark:text-black hover:dark:text-white'
          >
            Inscrever
          </button>
        </form>
      </section>

      <section className='shadow-md hidden lg:block w-full rounded-2xl bg-white px-4 py-8 space-y-5 dark:bg-dark-basic-100'>
        <h2 className='text-2xl font-bold'>Top views</h2>
        {/* @ts-expect-error */}
        <ListMiniPosts url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=4&strategy=relevant' />
      </section>

      <section className='shadow-md hidden lg:block w-full rounded-2xl bg-white px-4 py-8 space-y-5 dark:bg-dark-basic-100'>
        <h2 className='text-2xl font-bold'>Top categorias</h2>
        <div className='space-y-5'>
          <hr />
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              Cloud
            </span>
            <Icon
              variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200
              group-hover:dark:text-white group-hover:dark:bg-ligth-primary-200'
            >
              2
            </Icon>
          </Link>
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              REDES
            </span>
            <Icon
              variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200
                    group-hover:dark:text-white group-hover:dark:bg-ligth-primary-200'
            >
              5
            </Icon>
          </Link>
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              INTELIGÊNCIA ARTIFICIAL
            </span>
            <Icon
              variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200
                    group-hover:dark:text-white group-hover:dark:bg-ligth-primary-200'
            >
              1
            </Icon>
          </Link>
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              DADOS
            </span>
            <Icon
              variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200
                    group-hover:dark:text-white group-hover:dark:bg-ligth-primary-200'
            >
              6
            </Icon>
          </Link>
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              VR
            </span>
            <Icon
              variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200
                    group-hover:dark:text-white group-hover:dark:bg-ligth-primary-200'
            >
              3
            </Icon>
          </Link>
          <Link
            href='#'
            className='font-bold uppercase group flex justify-between items-center'
          >
            <span className='group-hover:text-ligth-primary-100 duration-300'>
              SEGURANÇA DA INFORMAÇÃO
            </span>
            <Icon variantes='text-xl w-10 h-10 flex justify-center items-center group-hover:text-white group-hover:bg-ligth-primary-200 '>
              3
            </Icon>
          </Link>
        </div>
      </section>
    </nav>
  );
}
