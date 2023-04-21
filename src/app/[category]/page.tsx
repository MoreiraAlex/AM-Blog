import BannerParams from '@/components/params/bannerParams';
import CategoryVisible from '@/components/params/categoryVisible';
import ListPost from '@/components/ui/listPost';
import PostCard from '@/components/ui/postCard';

interface Iprops {
  params: {
    category: string;
  };
}

export default function Category({ params }: Iprops) {
  return (
    <>
      {/* @ts-expect-error */}
      <BannerParams
        title=''
        keyword={params.category}
        subtitle='Categoria'
        description=''
        styles='px-2 py-40 sm:px-10 sm:pb-5 sm:pt-30'
      />
      {/* @ts-expect-error */}
      <CategoryVisible visible={false} />
      <div className='col-span-5 space-y-10 xl:col-span-3'>
        <section className='space-y-5'>
          <h2 className='text-2xl font-bold md:text-3xl'>
            Ultimos posts de {params.category}
          </h2>
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
          <div className='space-y-5'>
            {/* @ts-expect-error */}
            <ListPost url='https://api.github.com/users/MoreiraAlex/repos' />
          </div>
        </section>
      </div>
    </>
  );
}
