import styled from 'styled-components';

export interface Iprops {
  className?: string;
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  wrap?: string;
  grow?: string;
}

export const FlexComponent = styled.section<Iprops>`
  ${(props) => `.${props.className}`} , & {
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'center'};
    gap: ${(props) => props.gap};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    flex-wrap: ${(props) => props.wrap};
    flex-grow: ${(props) => props.grow};
  }
`;
