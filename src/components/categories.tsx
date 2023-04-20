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

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
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
              <CategoryCard key={index} title={title} />
            ))}
          </Slider>
        </section>
      )}
    </>
  );
};
