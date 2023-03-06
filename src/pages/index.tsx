import type { NextPage } from 'next';

import Link from 'next/link';
import Image from 'next/image';

import { Container, Flex, Header } from 'src/components/index';
import Banner from 'components/header/Banner';

import Logo from 'src/assets/img/images.png';

interface Iprops {
  posts: { [key: string]: string }[];
}

const Home: NextPage<Iprops> = ({ posts }) => {
  return (
    <>
      <Header />
      <Banner img={Logo} />
    </>
  );
};

export default Home;
