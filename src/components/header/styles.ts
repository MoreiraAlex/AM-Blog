import styled from 'styled-components';

export const HeaderComponent = styled.header`
  background-color: ${(props) => props.theme.color.ice};
  width: 100vw;

  & h1 {
    width: 150px;
    height: 100px;
    background-color: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.white};
    text-align: center;
    padding: 10px;
    padding-top: 40px;
    text-transform: uppercase;
  }

  & a > svg {
    background-color: ${(props) => props.theme.color.acento};
    color: ${(props) => props.theme.color.ice};
    border-radius: 4px;
    width: 25px;
    height: auto;
    padding: 5px;
    transition: 400ms;

    &:hover {
      color: ${(props) => props.theme.color.primary};
    }
  }

  & label {
    display: flex;
    align-items: center;

    & input {
      height: 35px;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 14px;
      outline: none;
    }

    & svg {
      margin-left: -10%;
    }
  }

  & nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > span > svg {
      fill: ${(props) => props.theme.color.black};
      font-size: 20px;

      &:hover {
        cursor: pointer;
      }
    }

    & ul {
      display: flex;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        display: none;
      }

      & li {
        flex: none;
        scroll-snap-align: start;
        list-style: none;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        padding: 0 10px;
        color: ${(props) => props.theme.color.black};
        transition: color 400ms;

        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.primary};
          border-bottom: 2px solid ${(props) => props.theme.color.primary};
        }
      }
    }
  }
`;
