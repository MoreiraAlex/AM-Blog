import BannerParams from '@/components/params/bannerParams';
import CategoryVisible from '@/components/params/categoryVisible';
import ListPost from '@/components/service/listPost';

export default function Home() {
  return (
    <>
      {/* @ts-expect-error */}
      <BannerParams
        title='Bem vindo ao'
        keyword='AM BLOG'
        subtitle='Alex Moreira Blog'
        description='Cobrimos todas as novidades e tendências do universo tecnológico, desde os gadgets mais recentes até as notícias mais quentes do setor.'
        styles='px-2 py-40 sm:px-12 sm:pt-64'
      />
      {/* @ts-expect-error */}
      <CategoryVisible visible={true} />
      <div className='col-span-5 space-y-10 xl:col-span-3'>
        {/* @ts-expect-error */}
        <ListPost
          url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=1&strategy=relevant'
          hero={true}
          col={true}
        />
        <section className='space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>Trending</h2>
          <div className='space-y-5 lg:flex lg:justify-center lg:space-y-0 lg:space-x-5'>
            {/* @ts-expect-error */}
            <ListPost
              url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=3&strategy=relevant'
              col={true}
              hero={false}
              removeFirst={true}
            />
          </div>
        </section>
        <section className='hidden lg:block lg:space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>Lançamentos</h2>
          <div className='space-y-5'>
            {/* @ts-expect-error */}
            <ListPost
              url='https://www.tabnews.com.br/api/v1/contents?page=1&per_page=3&strategy=new'
              col={false}
              hero={false}
            />
          </div>
        </section>
      </div>
    </>
  );
}
