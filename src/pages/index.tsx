import type { NextPage } from 'next';

import { Header } from 'src/components/index';

interface Iprops {
  posts: { [key: string]: string }[];
}

const Home: NextPage<Iprops> = ({ posts }) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
