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
}

export const FlexComponent = styled.section<Iprops>`
  ${(props) => `.${props.className}`} , & {
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'center'};
    justify-content: ${(props) => props.justify || 'center'};
    gap: ${(props) => props.gap || null};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: ${(props) => props.padding || '0'};
    margin: ${(props) => props.margin || '0'};
    flex-wrap: ${(props) => props.wrap || 'nowrap'};
  }
`;
