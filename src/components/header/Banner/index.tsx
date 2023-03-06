import type { ReactNode } from 'react';
import type { NextPage } from 'next';

import Image, { StaticImageData } from 'next/image';

import { Iprops } from './styles';

import { Container } from 'src/components/index';

import { BannerComponent } from './styles';

interface Iprop extends Iprops {
  img: StaticImageData;
}

const Banner: NextPage<Iprop> = ({ className, img }) => {
  return (
    <>
      <BannerComponent className={className}>
        <Container>
          <Image src={img} alt='' quality={100} />
        </Container>
      </BannerComponent>
    </>
  );
};

export default Banner;
