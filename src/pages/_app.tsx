import type { AppProps } from 'next/app';
import GlobalStyled from 'src/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}
