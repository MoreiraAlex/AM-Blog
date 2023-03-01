import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secundary: string;
      acento: string;
      ice: string;
      gray: string;
      white: string;
      black: string;
    };

    font: {
      title: string;
      text: string;
    };
  }
}
