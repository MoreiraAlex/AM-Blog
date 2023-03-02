import styled from 'styled-components';

export const HeaderComponent = styled.header`
  background-color: ${(props) => props.theme.color.ice};
  position: relative;

  & img {
    width: 15vw;
    max-width: 125px;
    height: auto;
  }

  & .navArea {
    width: 85vw;
  }

  & .navFirstLine > .SocialIcons {
    height: 30px;

    @media (max-width: 450px) {
      height: 20px;
    }

    @media (max-width: 600px) {
      justify-content: center;
    }

    & > a {
      height: 100%;

      & > svg {
        background-color: ${(props) => props.theme.color.acento};
        color: ${(props) => props.theme.color.ice};
        border-radius: 4px;
        width: auto;
        height: 100%;
        padding: 5px;
        transition: 400ms;

        &:hover {
          color: ${(props) => props.theme.color.primary};
        }

        @media (max-width: 450px) {
          padding: 3px;
        }
      }
    }
  }

  & .navFirstLine > button {
    display: none;
    background-color: transparent;
    border: none;
    height: 30px;
    width: 30px;
    z-index: 10;

    @media (max-width: 600px) {
      display: block;
    }

    @media (max-width: 450px) {
      width: 20px;
      height: 20px;
    }

    & > svg {
      fill: ${(props) => props.theme.color.primary};
      width: 100%;
      height: 100%;
    }
  }

  & .navFirstLine > form > label {
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
      display: none;
    }

    & input {
      height: 35px;
      border-radius: 5px;
      padding-left: 10px;
      font-size: 14px;
      outline: none;
    }

    & svg {
      margin-left: -15%;
      width: 20px;
      height: auto;
    }
  }

  & .navSecondLine > nav {
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

      @media (max-width: 600px) {
        display: none;
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

      @media (max-width: 600px) {
        position: absolute;
        z-index: 5;
        background-color: rgb(170, 210, 215, 0.95);
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        /* padding: 100px; */
        overflow-y: scroll;
        visibility: hidden;
        transition: 1s ease-out;
        border-bottom-left-radius: 50%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      & li {
        flex: none;
        scroll-snap-align: start;
        list-style: none;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: bold;
        color: ${(props) => props.theme.color.black};
        transition: color 400ms;

        &:first-child {
          display: none;
        }

        &:not(:last-child) {
          margin-right: 30px;
        }

        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme.color.primary};
          border-bottom: 2px solid ${(props) => props.theme.color.primary};
        }

        @media (max-width: 600px) {
          & {
            margin-right: 0 !important;
            margin-bottom: 20px;
            color: ${(props) => props.theme.color.white};
          }
          &:first-child {
            display: flex;
            align-items: center;
            margin-bottom: 0;

            & input {
              height: 35px;
              width: 80vw;
              font-size: 14px;
              outline: none;
              border: none;
              border-bottom: 1px solid ${(props) => props.theme.color.white};
              background-color: transparent;
              color: ${(props) => props.theme.color.white};
              margin: 50px 0;

              &::placeholder {
                color: ${(props) => props.theme.color.white};
              }
            }
          }
        }
      }
    }

    & .mobile_active {
      width: 100vw;
      height: 100vh;
      visibility: visible;
    }
  }
`;
