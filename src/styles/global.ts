import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    };
    
    body {
        color: ${(props) => props.theme.color.black};
        background-color: ${(props) => props.theme.color.ice};
    };
`;
