import './globals.css';
import { Poppins } from 'next/font/google';
import { Logo } from '@/components/logo';
import Link from 'next/link';
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CategoryProvider } from '@/lib/categoryProvider';
import { HeaderProvider } from '@/lib/headerProvider';

export const metadata = {
  title: 'Am Blog',
  description: 'Generated by create next app',
};

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <HeaderProvider>
        <CategoryProvider>
          <body
            className={`${poppins.className} text-ligth-basic-300 p-4 space-y-20 bg-zinc-100`}
          >
            {children}
            <footer className='-m-4 bg-white rounded-tl-2xl rounded-tr-2xl'>
              <div className='container mx-auto px-4 py-8 flex flex-col items-center space-y-5'>
                <div className='flex items-center flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:w-full'>
                  <Logo />
                  <div className='flex items-center justify-center space-x-1 md:justify-start lg:justify-center'>
                    <Link
                      href='#'
                      className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
                    >
                      <FaLinkedinIn className='md:text-xl' />
                    </Link>
                    <Link
                      href='#'
                      className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
                    >
                      <FaBehance className='md:text-xl' />
                    </Link>
                    <Link
                      href='#'
                      className='bg-ligth-primary-100 rounded-full p-2 hover:text-white hover:bg-ligth-primary-200 duration-300'
                    >
                      <FaGithub className='md:text-xl' />
                    </Link>
                  </div>
                </div>
                <hr className='w-full' />
                <div className='flex flex-col items-center justify-center text-center'>
                  <span className='text-sm font-bold'>
                    AM Blog &copy; 2023 Todos os direitos reservados.
                  </span>
                  <span className='text-sm font-bold'>
                    Desenvolvido por{' '}
                    <a
                      className='text-ligth-primary-100 hover:text-ligth-primary-200'
                      href='https://github.com/MoreiraAlex'
                      target='_blank'
                    >
                      Alex Moreira
                    </a>
                  </span>
                </div>
              </div>
            </footer>
          </body>
        </CategoryProvider>
      </HeaderProvider>
    </html>
  );
}
