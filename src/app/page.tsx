import { Categories, PostCard, Header, LateralBar } from 'components/index';

export default function Home() {
  return (
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
        <div className='space-y-5 lg:flex lg:space-y-0 lg:space-x-5'>
          <PostCard
            author='Alex Moreira'
            date='16 Abril, 2023'
            title='5 Reasons to avoid shopping on saturdays'
            col={true}
          >
            Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
            fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
            Vestibulum.
          </PostCard>
          <PostCard
            author='Alex Moreira'
            date='16 Abril, 2023'
            title='5 Reasons to avoid shopping on saturdays'
            col={true}
          >
            Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
            fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
            Vestibulum.
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
            Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
            fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
            Vestibulum.
          </PostCard>
          <PostCard
            author='Alex Moreira'
            date='16 Abril, 2023'
            title='5 Reasons to avoid shopping on saturdays'
          >
            Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
            fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
            Vestibulum.
          </PostCard>
          <PostCard
            author='Alex Moreira'
            date='16 Abril, 2023'
            title='5 Reasons to avoid shopping on saturdays'
          >
            Lorem ipsum dolor sit amet, consectetur Pellentesque sit amet sapien
            fringilla, mattis mattis tellus. Nullam quis imperdiet augue.
            Vestibulum.
          </PostCard>
        </div>
      </section>
    </div>
  );
}
