import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import { Iprops } from './styles';
import { Style } from './styles';

interface Iprop extends Iprops {
  children: ReactNode;
}

const Container: NextPage<Iprop> = ({ children, width }) => {
  return <Style width={width}>{children}</Style>;
};

export default Container;
