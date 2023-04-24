import BannerParams from '@/components/params/bannerParams';
import CategoryVisible from '@/components/params/categoryVisible';
import ListPost from '@/components/service/listPost';
import { ReactNode } from 'react';

interface Iprops {
  params: {
    category: string;
  };
  children: ReactNode;
}

export default function Layout({ params, children }: Iprops) {
  const slug = decodeURI(params.category);

  return (
    <>
      {/* @ts-expect-error */}
      <BannerParams
        title=''
        keyword={slug}
        subtitle='Categoria'
        description=''
        styles='px-2 py-40 md:px-12 md:py-0 md:pt-32'
      />
      {/* @ts-expect-error */}
      <CategoryVisible visible={false} />
      <div className='col-span-5 space-y-10 xl:col-span-3'>
        <section className='space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>
            Trending's de {slug}
          </h2>
          <div className='space-y-5 lg:flex lg:justify-center lg:space-y-0 lg:space-x-5'>
            {/* @ts-expect-error */}
            <ListPost
              url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=3&strategy=relevant'
              col={true}
              removeLast={true}
            />
          </div>
        </section>
        <section className='space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>Lançamentos</h2>
          <div className='space-y-5'>{children}</div>
        </section>
      </div>
    </>
  );
}
