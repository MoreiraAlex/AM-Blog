import type { NextPage } from 'next';
import Link from 'next/link';
// import { Limelight } from 'next/font/google';

import { NavBarComponent } from './styles';

import { Flex, Container } from 'components/index';

// const limelight = Limelight({ weight: '400' });

const NavBar: NextPage = () => {
  return (
    <NavBarComponent>
      <Container>
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
      </Container>
    </NavBarComponent>
  );
};

export default NavBar;
