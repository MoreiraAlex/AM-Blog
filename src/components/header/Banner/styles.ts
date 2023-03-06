import styled from 'styled-components';

export interface Iprops {
  className?: string;
}

export const BannerComponent = styled.section<Iprops>`
  ${(props) => `.${props.className}`} , & {
    background-color: red;

    & img {
      width: 50vw;
      height: 50vh;
    }
  }
`;
