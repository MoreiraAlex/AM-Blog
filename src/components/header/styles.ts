import styled from 'styled-components';

export const HeaderComponent = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Limelight&display=swap');

  background-color: ${(props) => props.theme.color.gray};

  & a {
    font-size: 20px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.white};
  }

  & h1 > a {
    font-size: 48px;
    color: ${(props) => props.theme.color.white};
    font-family: 'Limelight', cursive;
  }

  & input {
    height: 40px;
    width: 275px;
    border-radius: 15px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 16px;
  }
`;
