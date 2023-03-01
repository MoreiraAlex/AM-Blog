import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
    };
    
    body {
        color: ${(props) => props.theme.color.black};
        background-color: ${(props) => props.theme.color.ice};
        /* font-family: 'Montserrat', sans-serif; */
    };
`;
