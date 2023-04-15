import type { NextPage } from 'next';
import { CardComponent } from './styles';
import Flex from 'components/flex';
import { Iprops } from './styles';

interface Iprop extends Iprops {
  title: string;
}

const Card: NextPage<Iprop> = ({ img, title }) => {
  return (
    <>
      <CardComponent img={img}>
        <Flex width='100%' height='100%'>
          <h2>{title}</h2>
        </Flex>
      </CardComponent>
    </>
  );
};

export default Card;
