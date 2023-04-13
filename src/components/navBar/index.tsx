import type { NextPage } from 'next';
import Link from 'next/link';

import { NavBarComponent } from './styles';

import { Flex, Container } from 'components/index';
import { FaSearch } from 'react-icons/fa';

const NavBar: NextPage = () => {
  return (
    <NavBarComponent>
      <Container>
        <Flex justify='space-between' padding='20px 50px'>
          <h1>
            <Link href='#'>AM BLOG</Link>
          </h1>
          <Flex align='center' gap='20px'>
            <Link href='#'>Contato</Link>
            <form>
              <FaSearch />
              <label>
                <input placeholder='O que procura?' />
              </label>
            </form>
          </Flex>
        </Flex>
      </Container>
    </NavBarComponent>
  );
};

export default NavBar;
