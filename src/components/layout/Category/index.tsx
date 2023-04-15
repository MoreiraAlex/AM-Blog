import type { NextPage } from 'next';
import { CategorySlideComponent } from './styles';
import Flex from 'components/flex';
import Card from './Card';
import img from 'public/img/images.png';
import Container from 'components/container';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CategorySlide: NextPage = () => {
  return (
    <Container>
      <CategorySlideComponent>
        <Flex gap='12px' height='360px' width='100%' padding='10px'>
          <IoIosArrowBack />
          <Flex
            className='slider'
            height='100%'
            gap='12px'
            justify='flex-start'
            grow='1'
          >
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
            <Card img={img} title='teste' />
          </Flex>
          <IoIosArrowForward />
        </Flex>
      </CategorySlideComponent>
    </Container>
  );
};

export default CategorySlide;
