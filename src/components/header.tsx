import { Navbar } from './navbar';

export const Header = () => {
  return (
    <header className='space-y-10'>
      <Navbar />
      <div className='sm:container mx-auto m-4 bg-stone-400 text-center h-full flex flex-col space-y-8 rounded-2xl px-2 py-40 sm:px-12 sm:pt-64 items-center md:items-start md:text-left'>
        <h3 className='text-xs uppercase font-bold text-white'>
          Alex Moreira Blog
        </h3>
        <h2 className='sm:text-5xl text-4xl text-white'>
          Bem-vindo ao{' '}
          <strong className='text-ligth-primary-100'>AM Blog</strong>
        </h2>
        <p className='md:text-xl text-white lg:w-5/12'>
          Cobrimos todas as novidades e tendências do universo tecnológico,
          desde os gadgets mais recentes até as notícias mais quentes do setor.
        </p>
      </div>
    </header>
  );
};
