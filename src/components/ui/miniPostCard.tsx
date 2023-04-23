import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface Iprops {
  title: string;
  thumb: string;
  link: string;
}

export default function MiniPostCard({ title, thumb, link }: Iprops) {
  return (
    <div className='space-y-5'>
      <hr />
      <div className='grid grid-cols-7 gap-x-4 2xl:h-24 2xl:grid-cols-3'>
        <div
          style={{ backgroundImage: `url(${thumb})` }}
          className='object-fill rounded-xl col-span-3 bg-center bg-contain bg-no-repeat bg-zinc-100 relative 2xl:col-span-1
          after:absolute after:inset-0 after:w-full after:h-full after:rounded-2xl after:bg-black after:opacity-10 dark:after:opacity-0'
        ></div>
        <div className='col-span-4 flex flex-col space-y-1 2xl:col-span-2 justify-evenly'>
          <abbr title={title} className='no-underline'>
            <h3 className='text-sm font-bold custom-wrap'>{title}</h3>
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
      </div>
    </div>
  );
}
