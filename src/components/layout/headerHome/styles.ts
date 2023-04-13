import styled from 'styled-components';
import { StaticImageData } from 'next/image';

export interface Iprops {
  img: StaticImageData;
}

export const BannerComponentG = styled.section<Iprops>`
  background-image: url(${(props) => props.img.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;
  flex-grow: 1;
  min-width: 500px;
  height: 720px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000000;
    opacity: 0.7;
  }

  @media (max-width: 500px) {
    & {
      min-width: 320px;
    }
  }
`;

export const BannerComponentM = styled.section<Iprops>`
  background-image: url(${(props) => props.img.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 500px;
  height: 355px;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000000;
    opacity: 0.7;
  }

  @media (max-width: 500px) {
    & {
      min-width: 320px;
    }
  }
`;

export const BannerComponentP = styled.section<Iprops>`
  background-image: url(${(props) => props.img.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-width: 245px;
  flex-grow: 1;
  height: 355px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000000;
    opacity: 0.7;
  }

  @media (max-width: 560px) {
    & {
      display: none;
    }
  }
`;
