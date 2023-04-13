import styled from 'styled-components';

export const NavBarComponent = styled.header`
  background-color: ${(props) => props.theme.color.gray};

  & a {
    font-size: 20px;
    text-transform: uppercase;
    color: ${(props) => props.theme.color.white};

    @media (max-width: 600px) {
      & {
        font-size: 16px;
      }
    }
  }

  & h1 > a {
    font-size: 48px;
    color: ${(props) => props.theme.color.white};
    font-family: 'Limelight', cursive;

    @media (max-width: 600px) {
      & {
        font-size: 32px;
      }
    }
  }

  & form svg {
    fill: ${(props) => props.theme.color.white};
    font-size: 20px;

    display: none;

    @media (max-width: 900px) {
      & {
        display: block;
      }
    }
  }

  & form input {
    height: 40px;
    width: 275px;
    border-radius: 15px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-size: 16px;

    @media (max-width: 900px) {
      & {
        display: none;
      }
    }
  }

  & > section > section {
    @media (max-width: 425px) {
      & {
        padding: 10px 15px;
      }
    }
  }
`;
