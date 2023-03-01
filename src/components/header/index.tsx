import type { NextPage } from 'next';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

import { Container, Flex } from 'components/index';
import { HeaderComponent } from './styles';

import { CiSearch } from 'react-icons/ci';
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

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Header: NextPage = () => {
  const slider = useRef<HTMLDivElement | null>(null);

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
          {/* <Image
          src=''
          alt='Logo da empresa'
          width={100}
          height={100}
          quality={100}
        /> */}
          <h1>AmBlog</h1>
          <Flex direction='column' justify='space-around' padding='0 10px'>
            <Flex>
              <Flex justify='flex-start' gap='5px'>
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
              <form>
                <label>
                  <input placeholder='O que procura?' />
                  <CiSearch />
                </label>
              </form>
            </Flex>
            <Flex>
              <nav>
                <span onClick={() => MoveSlider(1)}>
                  <IoIosArrowBack />
                </span>
                {/* @ts-ignore */}
                <ul ref={slider}>
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
