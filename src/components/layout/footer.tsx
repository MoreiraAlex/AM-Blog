import Link from 'next/link';
import Icon from '../ui/icon';
import Logo from '../ui/logo';
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='-m-4 bg-white rounded-tl-2xl rounded-tr-2xl dark:bg-dark-basic-100'>
      <div className='container mx-auto px-4 py-8 flex flex-col items-center space-y-5'>
        <div className='flex items-center flex-col space-y-3 lg:space-y-0 lg:flex-row lg:justify-between lg:w-full'>
          <Logo />
          <div className='flex items-center justify-center space-x-1 md:justify-start lg:justify-center'>
            <Icon tail='p-3 w-8 h-8 flex items-center justify-center md:text-xl md:w-10 md:h-10'>
              <Link href='#'>
                <FaLinkedinIn />
              </Link>
            </Icon>
            <Icon tail='p-3 w-8 h-8 flex items-center justify-center md:text-xl md:w-10 md:h-10'>
              <Link href='#'>
                <FaBehance />
              </Link>
            </Icon>
            <Icon tail='p-3 w-8 h-8 flex items-center justify-center md:text-xl md:w-10 md:h-10'>
              <Link href='#'>
                <FaGithub />
              </Link>
            </Icon>
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
              className='text-ligth-primary-100 hover:text-ligth-primary-200 hover:dark:text-dark-primary-200'
              href='https://github.com/MoreiraAlex'
              target='_blank'
            >
              Alex Moreira
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
