import styled from 'styled-components';

export interface Iprops {
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  width?: string;
  padding?: string;
  margin?: string;
}

export const Style = styled.section<Iprops>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  gap: ${(props) => props.gap || null};
  width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
`;
