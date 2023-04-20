'use client';
import Teste from '@/components/teste';
import { UseCategoryContext } from '@/lib/categoryProvider';
import { PostCard } from 'components/index';
import { useEffect } from 'react';

export default function Home() {
  const { True } = UseCategoryContext();

  useEffect(() => {
    True?.();
  }, []);

  return (
    <>
      {/* @ts-expect-error */}
      <Teste
        title='Bem vindo ao'
        keyword='AM BLOG'
        subtitle='Alex Moreira Blog'
        description='Cobrimos todas as novidades e tendências do universo tecnológico, desde os gadgets mais recentes até as notícias mais quentes do setor.'
        styles='px-2 py-40 sm:px-12 sm:pt-64'
      />
      <div className='col-span-5 space-y-10 xl:col-span-3'>
        <PostCard
          author='Alex Moreira'
          date='16 Abril, 2023'
          title='5 Reasons to avoid shopping on saturdays'
          col={true}
          hero={true}
        >
          Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
          fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
          Vestibulum.
        </PostCard>
        <section className='space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>Trending</h2>
          <div className='space-y-5 lg:flex lg:justify-center lg:space-y-0 lg:space-x-5'>
            <PostCard
              author='Alex Moreira'
              date='16 Abril, 2023'
              title='5 Reasons to avoid shopping on saturdays'
              col={true}
            >
              Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet
              sapien fringilla, mattis mattis tellus. Nullam quis imperdiet
              augue. Vestibulum.
            </PostCard>
            <PostCard
              author='Alex Moreira'
              date='16 Abril, 2023'
              title='5 Reasons to avoid shopping on saturdays'
              col={true}
            >
              Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet
              sapien fringilla, mattis mattis tellus. Nullam quis imperdiet
              augue. Vestibulum.
            </PostCard>
          </div>
        </section>
        <section className='hidden lg:block lg:space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>Lançamentos</h2>
          <div className='space-y-5'>
            <PostCard
              author='Alex Moreira'
              date='16 Abril, 2023'
              title='5 Reasons to avoid shopping on saturdays'
            >
              Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet
              sapien fringilla, mattis mattis tellus. Nullam quis imperdiet
              augue. Vestibulum.
            </PostCard>
            <PostCard
              author='Alex Moreira'
              date='16 Abril, 2023'
              title='5 Reasons to avoid shopping on saturdays'
            >
              Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet
              sapien fringilla, mattis mattis tellus. Nullam quis imperdiet
              augue. Vestibulum.
            </PostCard>
            <PostCard
              author='Alex Moreira'
              date='16 Abril, 2023'
              title='5 Reasons to avoid shopping on saturdays'
            >
              Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet
              sapien fringilla, mattis mattis tellus. Nullam quis imperdiet
              augue. Vestibulum.
            </PostCard>
          </div>
        </section>
      </div>
    </>
  );
}
