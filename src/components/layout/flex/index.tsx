import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import { Iprops } from './styles';
import { Style } from './styles';

interface Iprop extends Iprops {
  children: ReactNode;
}

const Flex: NextPage<Iprop> = ({
  children,
  direction,
  align,
  justify,
  gap,
  width,
  padding,
  margin,
}) => {
  return (
    <Style
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      width={width}
      padding={padding}
      margin={margin}
    >
      {children}
    </Style>
  );
};

export default Flex;
