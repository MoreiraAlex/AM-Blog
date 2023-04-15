import type { NextPage } from 'next';

import { CategorySlide, HeaderHome } from 'components/index';

interface Iprops {
  posts: { [key: string]: string }[];
}

const Home: NextPage<Iprops> = ({ posts }) => {
  return (
    <>
      <HeaderHome />
      <CategorySlide />
    </>
  );
};

export default Home;
