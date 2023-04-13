import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export interface Iprops {
  img: StaticImageData;
}

export const BannerChildrenComponent = styled.section`
  position: relative;
  z-index: 1;
  color: lightgrey;
  width: 100%;
  height: 100%;
  text-align: center;

  & p {
    font-size: 18px;
  }

  & h2 {
    font-size: 32px;
    color: white;
  }

  & span {
    font-size: 16px;
  }

  & a {
    color: lightgrey;
    font-size: 16px;
    border: 1px solid lightgrey;
    border-radius: 20px;
    padding: 15px;
    transition: 0.4s;

    &:hover {
      color: white;
      border-color: white;
    }
  }
`;
