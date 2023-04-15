import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export interface Iprops {
  img: StaticImageData;
}

export const CardComponent = styled.section<Iprops>`
  background-image: url(${(props) => props.img.src});
  height: 100%;
  /* width: 25%; */
  min-width: 265px;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000000;
    opacity: 0.7;
  }

  @media (max-width: 1200px) {
    & {
      width: 35%;
    }
  }

  @media (max-width: 425px) {
    & {
      width: 100%;
    }
  }
`;
