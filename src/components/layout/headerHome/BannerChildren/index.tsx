import type { NextPage } from 'next';
import { BannerChildrenComponent } from './styles';
import Flex from 'components/flex';
import Link from 'next/link';

export interface Iprops {
  categoria: string;
  titulo: string;
  autor: string;
  data: string;
}

const BannerChildren: NextPage<Iprops> = ({
  categoria,
  titulo,
  autor,
  data,
}) => {
  return (
    <BannerChildrenComponent>
      <Flex direction='column' gap='30px' height='100%'>
        <p>{categoria}</p>
        <h2>{titulo}</h2>
        <Flex width='100%' gap='10px'>
          <span>{autor}</span>-<span>{data}</span>
        </Flex>
        <Link href='#'>Visitar</Link>
      </Flex>
    </BannerChildrenComponent>
  );
};

export default BannerChildren;
