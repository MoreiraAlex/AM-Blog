'use client';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { CategoryCard } from './categoryCard';
import { useRef } from 'react';

export const Categories = () => {
  const slider = useRef<HTMLInputElement>(null);

  function MoveSlider(side: number) {
    if (slider.current) {
      if (side > 0) {
        slider.current.scrollLeft -= slider.current.children[0].clientWidth;
      } else {
        slider.current.scrollLeft += slider.current.children[0].clientWidth;
      }
    }
  }
  return (
    <section className='container mx-auto space-y-10'>
      <h2 className='text-2xl sm:text-3xl capitalize font-bold'>Categorias</h2>
      <div className='flex items-center justify-center'>
        <span className='w-1/12 hidden sm:block'>
          <BiChevronLeft
            onClick={() => MoveSlider(1)}
            className='text-3xl w-10 h-10 rounded-full p-1 bg-ligth-theme-100 mx-auto hover:text-white hover:bg-ligth-theme-200 duration-300 hover:cursor-pointer'
          />
        </span>
        <div
          className='flex overflow-x-auto scroll-smooth snap-x w-full sm:w-10/12 scroll-bar'
          ref={slider}
        >
          <CategoryCard title='Redes' />
          <CategoryCard title='Inteligência artificial' />
          <CategoryCard title='Dados' />
          <CategoryCard title='Cloud' />
          <CategoryCard title='VR' />
          <CategoryCard title='Segurança da informação' />
        </div>
        <span className='w-1/12 hidden sm:block'>
          <BiChevronRight
            onClick={() => MoveSlider(0)}
            className='text-3xl w-10 h-10 rounded-full p-1 bg-ligth-theme-100 mx-auto hover:text-white hover:bg-ligth-theme-200 duration-300 hover:cursor-pointer'
          />
        </span>
      </div>
    </section>
  );
};
