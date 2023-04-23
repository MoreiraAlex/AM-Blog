import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Iprops {
  title: string;
  author: string;
  category: number;
  thumb: string;
  link: string;
  date: string;
  col?: boolean;
  hero?: boolean;
}

export default function PostCard({
  title,
  author,
  category,
  thumb,
  link,
  date,
  col,
  hero,
}: Iprops) {
  const newDate = format(new Date(date), "yyyy',' dd 'dE' MMMM", {
    locale: ptBR,
  });
  return (
    <section
      className={`h-560 rounded-2xl bg-white shadow-lg overflow-hidden flex flex-col sm:flex-row sm:h-96 ${
        col
          ? `lg:flex-col ${
              hero ? 'lg:h-560' : 'lg:max-w-md lg:basis-1/2 lg:h-560'
            }`
          : ''
      } dark:bg-dark-basic-100`}
    >
      <div
        style={{ backgroundImage: `url(${thumb})` }}
        className={`w-1/2 h-3/5 p-8 bg-center bg-contain bg-no-repeat bg-zinc-100 relative sm:h-auto 
        after:absolute after:inset-0 after:w-full after:h-full after:rounded-2xl after:bg-black after:opacity-10 dark:after:opacity-0
         ${col ? `w-full lg:flex-grow ${hero ? '' : ''}` : ''}`}
      >
        <span className='px-5 py-2 bg-ligth-primary-100 rounded-3xl text-xs font-bold uppercase relative z-10 dark:text-black'>
          {category}
        </span>
      </div>
      <div
        className={`px-4 py-8 space-y-5 flex flex-col justify-between ${
          col ? `w-full ${hero ? '' : 'lg:h-72'}` : 'w-1/2 2xl:w-1/2'
        }`}
      >
        <div className='grid grid-cols-5 items-center'>
          <div className='w-full max-w-12 h-12 bg-stone-400 rounded-full'></div>
          <span className='col-span-2 text-sm text-ligth-basic-200 capitalize'>
            {author}
          </span>
          <span className='col-span-2 text-sm text-ligth-basic-200 capitalize'>
            {newDate}
          </span>
        </div>
        <abbr title={title} className='no-underline'>
          <h2 className='text-lg lg:text-xl xl:text-2xl font-bold custom-wrap'>
            {title}
          </h2>
        </abbr>
        <Link
          href={link}
          target='_blank'
          className='group flex gap-4 items-center'
        >
          <FaArrowRight
            className='text-ligth-primary-100 group-hover:text-ligth-primary-200
                      group-hover:dark:text-dark-primary-200'
          />
          <span
            className='text-sm font-bold uppercase text-ligth-primary-100 group-hover:text-ligth-primary-200 
                     group-hover:dark:text-dark-primary-200'
          >
            Leia Mais
          </span>
        </Link>
      </div>
    </section>
  );
}
