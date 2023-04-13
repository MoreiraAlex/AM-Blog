import NavBar from 'components/navBar';
import type { NextPage } from 'next';
import { BannerComponentG, BannerComponentM, BannerComponentP } from './styles';
import Flex from 'components/flex';
import Container from 'components/container';

const HeaderHome: NextPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Flex padding='25px' gap='25px' wrap='wrap'>
          <BannerComponentG />
          <Flex direction='column'>
            <BannerComponentM />
            <Flex>
              <BannerComponentP />
              <BannerComponentP />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default HeaderHome;
