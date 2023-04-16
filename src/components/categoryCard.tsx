export const CategoryCard = ({ title }: { title: string }) => {
  return (
    <div className=' flex-none snap-start w-6/12 md:w-4/12 lg:w-3/12'>
      <div className='w-11/12 mx-auto bg-stone-400 h-56 rounded-2xl flex items-center sm:h-72 justify-center 2xl:h-96'>
        <h2 className='uppercase font-bold text-sm sm:text-lg text-white text-center'>
          {title}
        </h2>
      </div>
    </div>
  );
};
