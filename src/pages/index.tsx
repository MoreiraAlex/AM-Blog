import type { NextPage } from 'next';

import { HeaderHome } from 'components/index';

interface Iprops {
  posts: { [key: string]: string }[];
}

const Home: NextPage<Iprops> = ({ posts }) => {
  return (
    <>
      <HeaderHome />
    </>
  );
};

export default Home;
