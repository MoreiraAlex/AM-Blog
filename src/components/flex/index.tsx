import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import { Iprops } from './styles';
import { FlexComponent } from './styles';

interface Iprop extends Iprops {
  children: ReactNode;
}

const Flex: NextPage<Iprop> = ({
  children,
  className,
  direction,
  align,
  justify,
  gap,
  width,
  height,
  padding,
  margin,
  wrap,
}) => {
  return (
    <FlexComponent
      className={className}
      direction={direction}
      align={align}
      justify={justify}
      gap={gap}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      wrap={wrap}
    >
      {children}
    </FlexComponent>
  );
};

export default Flex;
