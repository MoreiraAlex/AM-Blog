import Link from 'next/link';

export const CategoryCard = ({
  title,
  active,
}: {
  title: string;
  active: boolean;
}) => {
  return (
    <Link
      href={title}
      className=' flex-none snap-start w-6/12 md:w-4/12 lg:w-3/12 select-none'
    >
      <div
        className={`w-11/12 mx-auto ${
          active ? 'bg-red-300' : 'bg-stone-400'
        } h-56 rounded-2xl flex items-center sm:h-72 justify-center 2xl:h-96 p-4`}
      >
        <h2 className='uppercase font-bold text-sm sm:text-lg text-white text-center select-none'>
          {title}
        </h2>
      </div>
    </Link>
  );
};
