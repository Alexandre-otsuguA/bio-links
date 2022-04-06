import { AppProps } from 'next/app';
import { Head, Toast } from 'components/global';
import globalCSS from 'styles/globalCSS';

export default function MyApp({ Component, pageProps }: AppProps) {
  globalCSS();

  return (
    <>
      <Head />
      <Component {...pageProps} />
      <Toast />
    </>
  );
}
