import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { Container, Flex } from 'components/index';
import { HeaderComponent } from './styles';

import Logo from 'src/assets/img/images.png';

import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiMenu, BiX } from 'react-icons/bi';
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialGoogle,
  SlSocialTwitter,
  SlSocialLinkedin,
  SlSocialBehance,
  SlSocialPintarest,
  SlSocialTumblr,
} from 'react-icons/sl';

const Header: NextPage = () => {
  const slider = useRef<HTMLUListElement>(null);

  const [button, setButton] = useState(false);
  function MoveSlider(side: number) {
    if (slider.current) {
      if (side > 0) {
        slider.current.scrollLeft -= 100;
      } else {
        slider.current.scrollLeft += 100;
      }
    }
  }

  return (
    <HeaderComponent>
      <Container>
        <Flex align='stretch'>
          <Image src={Logo} alt='Logo da empresa' quality={100} />
          <Flex
            className='navArea'
            direction='column'
            justify='space-evenly'
            padding='0 10px'
          >
            <Flex className='navFirstLine'>
              <Flex className='socialIcons' justify='flex-start' gap='5px'>
                <Link href='/'>
                  <SlSocialFacebook />
                </Link>
                <Link href='/'>
                  <SlSocialInstagram />
                </Link>
                <Link href='/'>
                  <SlSocialGoogle />
                </Link>
                <Link href='/'>
                  <SlSocialTwitter />
                </Link>
                <Link href='/'>
                  <SlSocialLinkedin />
                </Link>
                <Link href='/'>
                  <SlSocialBehance />
                </Link>
                <Link href='/'>
                  <SlSocialPintarest />
                </Link>
                <Link href='/'>
                  <SlSocialTumblr />
                </Link>
              </Flex>
              <button
                onClick={() => {
                  button ? setButton(false) : setButton(true);
                }}
              >
                {button ? <BiX /> : <BiMenu />}
              </button>
              <form>
                <label>
                  <input placeholder='O que procura?' />
                  <CiSearch />
                </label>
              </form>
            </Flex>
            <Flex className='navSecondLine'>
              <nav>
                <span onClick={() => MoveSlider(1)}>
                  <IoIosArrowBack />
                </span>
                <ul
                  ref={slider}
                  className={`${button ? 'mobileActive' : null}`}
                >
                  <li>
                    <form>
                      <label>
                        <input placeholder='O que procura?' />
                      </label>
                    </form>
                  </li>
                  <li>Categoria 1</li>
                  <li>Categoria 2</li>
                  <li>Categoria 3</li>
                  <li>Categoria 4</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 5</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                  <li>Categoria 6</li>
                </ul>
                <span onClick={() => MoveSlider(0)}>
                  <IoIosArrowForward />
                </span>
              </nav>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </HeaderComponent>
  );
};

export default Header;
