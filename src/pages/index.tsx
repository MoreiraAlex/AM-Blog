import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import { Header } from 'src/components/index';

import { getAllPosts } from 'src/services/api';

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
