import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface Iprops {
  title: string;
  author: string;
  date: string;
  children: ReactNode;
  col?: boolean;
  hero?: boolean;
}

export const PostCard = ({
  title,
  author,
  date,
  children,
  col,
  hero,
}: Iprops) => {
  return (
    <section
      className={`rounded-2xl bg-white shadow-lg flex flex-col sm:flex-row ${
        col ? `lg:flex-col ${hero ? '' : 'lg:max-w-md'}` : ''
      }`}
    >
      <div
        className={`w-1/2 h-64 bg-stone-400 rounded-2xl p-8 sm:h-auto ${
          col ? `w-full ${hero ? 'lg:h-96' : 'lg:h-72'}` : ''
        }`}
      >
        <span className='px-5 py-2 bg-ligth-basic-300 rounded-3xl text-white text-xs font-bold uppercase'>
          Cloud
        </span>
      </div>
      <div
        className={`px-4 py-8 space-y-5 h-96 lg:h-80 ${
          col ? `w-full ${hero ? '2xl:h-72' : ''}` : 'w-1/2 2xl:w-1/2'
        }`}
      >
        <div className='grid grid-cols-5 items-center'>
          <div className='w-full max-w-12 h-12 bg-stone-400 rounded-full'></div>
          <span className='col-span-2 text-sm text-ligth-basic-200 capitalize'>
            {author}
          </span>
          <span className='col-span-2 text-sm text-ligth-basic-200 capitalize'>
            {date}
          </span>
        </div>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-sm'>{children}</p>
        <Link href='#' className='group flex gap-4 items-center'>
          <FaArrowRight className='text-ligth-primary-100 group-hover:text-ligth-primary-200' />
          <span className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200'>
            Leia Mais
          </span>
        </Link>
      </div>
    </section>
  );
};
