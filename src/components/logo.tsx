import { Cinzel } from 'next/font/google';
import Link from 'next/link';

const cinzel = Cinzel({ subsets: ['latin'] });

export const Logo = () => {
  return (
    <Link href='#'>
      <div className='relative'>
        <h1
          className={`${cinzel.className} md:text-4xl uppercase z-10 relative text-2xl`}
        >
          AM Blog
        </h1>
        <span className='h-1/2 w-1/2 bg-ligth-theme-100 block absolute inset-1/2'></span>
      </div>
    </Link>
  );
};
