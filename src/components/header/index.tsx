import type { NextPage } from 'next';

import { HeaderComponent } from './styles';

import Link from 'next/link';
import { Flex } from '..';

const Header: NextPage = () => {
  return (
    <HeaderComponent>
      <Flex justify='space-between' padding='20px 50px'>
        <h1>
          <Link href='#'>AM BLOG</Link>
        </h1>
        <Flex align='center' justify='space-between' width='400px'>
          <Link href='#'>Contato</Link>
          <form>
            <label>
              <input placeholder='O que procura?' />
            </label>
          </form>
        </Flex>
      </Flex>
    </HeaderComponent>
  );
};

export default Header;
