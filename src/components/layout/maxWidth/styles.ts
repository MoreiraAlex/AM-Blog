import styled from 'styled-components';

export interface Iprops {
  width?: string;
}

export const Style = styled.section<Iprops>`
  margin: 0 auto;
  max-width: ${(props) => props.width || '1200px'};
`;
