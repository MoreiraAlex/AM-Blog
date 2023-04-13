import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import { Iprops } from './styles';
import { ContainerComponent } from './styles';

interface Iprop extends Iprops {
  children: ReactNode;
}

const Container: NextPage<Iprop> = ({ children, width }) => {
  return <ContainerComponent width={width}>{children}</ContainerComponent>;
};

export default Container;
