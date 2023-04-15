import NavBar from 'components/navBar';
import type { NextPage } from 'next';
import { BannerComponentG, BannerComponentM, BannerComponentP } from './styles';
import Flex from 'components/flex';

import img from 'public/img/Como-Criar-um-Blog.png';
import BannerChildren from './BannerChildren';

const HeaderHome: NextPage = () => {
  return (
    <>
      <NavBar />
      <Flex padding='10px' gap='10px' wrap='wrap' justify='center' grow='1'>
        <BannerComponentG img={img}>
          <BannerChildren
            categoria='Comida'
            titulo='Comendo besteiras'
            autor='Alex Moreira'
            data='13/04/2023'
          />
        </BannerComponentG>
        <Flex direction='column' gap='10px' align='center' grow='1'>
          <BannerComponentM img={img}>
            <BannerChildren
              categoria='Comida'
              titulo='Comendo besteiras'
              autor='Alex Moreira'
              data='13/04/2023'
            />
          </BannerComponentM>
          <Flex gap='10px' wrap='wrap' width='100%'>
            <BannerComponentP img={img}>
              <BannerChildren
                categoria='Comida'
                titulo='Comendo besteiras'
                autor='Alex Moreira'
                data='13/04/2023'
              />
            </BannerComponentP>
            <BannerComponentP img={img}>
              <BannerChildren
                categoria='Comida'
                titulo='Comendo besteiras'
                autor='Alex Moreira'
                data='13/04/2023'
              />
            </BannerComponentP>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
100;

export default HeaderHome;
