import ListPost from '@/components/service/listPost';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Category() {
  const paginas = [1, 2, 3, 4, 5];

  return (
    <>
      {/* @ts-expect-error */}
      <ListPost
        url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=4&strategy=new'
        col={false}
        hero={false}
      />
      <div
        className='flex items-center gap-6 px-5 py-4 shadow-md w-fit mx-auto rounded-2xl text-2xl font-bold
                 text-ligth-basic-200 bg-white dark:bg-dark-basic-100'
      >
        <Link href='/back' className='hover:text-ligth-primary-100'>
          <IoIosArrowBack />
        </Link>
        <div className='flex gap-4'>
          {paginas.map((value, index) => (
            <Link
              href={`${value}`}
              key={index}
              className='hover:text-ligth-primary-100'
            >
              {value}
            </Link>
          ))}
        </div>
        <Link href='/next' className='hover:text-ligth-primary-100'>
          <IoIosArrowForward />
        </Link>
      </div>
    </>
  );
}
