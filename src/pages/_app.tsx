import type { AppProps } from 'next/app';
import GlobalStyled from 'src/styles/global';
import light from 'src/styles/themes/light';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyled />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
