import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export interface Iprops {
  // img: StaticImageData;
}

export const CategorySlideComponent = styled.section<Iprops>`
  & svg {
    fill: ${(props) => props.theme.color.gray};
    font-size: 60px;
    background-color: red;
    height: 100%;
  }
  & .slider {
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      /* display: none; */
    }

    & > :nth-child(n) {
      flex: none;
      scroll-snap-align: start;
    }
  }

  @media (max-width: 425px) {
    & svg {
      display: none;
    }
  }
`;
