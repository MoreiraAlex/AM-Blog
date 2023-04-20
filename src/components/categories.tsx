'use client';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { CategoryCard } from './categoryCard';
import { useRef, useState } from 'react';
import { UseCategoryContext } from '@/lib/categoryProvider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Categories = () => {
  const slider = useRef<HTMLInputElement>(null);

  const { isVisible } = UseCategoryContext();

  const cards = [
    'Redes',
    'Inteligência artificial',
    'Dados',
    'Cloud',
    'VR',
    'Segurança da informação',
  ];

  const [active, setActive] = useState(0);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 3,
    speed: 1000,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease',
    arrows: false,
    afterChange: (current: number) => setActive(current),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    // ],
  };
  return (
    <>
      {isVisible && (
        <section className='container mx-auto space-y-10'>
          <h2 className='text-2xl sm:text-3xl capitalize font-bold'>
            Categorias
          </h2>
          <Slider {...settings}>
            {cards.map((title, index) => (
              <CategoryCard
                key={index}
                title={title}
                active={index === active ? true : false}
              />
            ))}
          </Slider>
        </section>
      )}
    </>
  );
};
