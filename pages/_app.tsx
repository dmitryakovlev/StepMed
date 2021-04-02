import { AppPropsType } from 'next/dist/next-server/lib/utils';
import { useEffect } from 'react';
import mailgo from 'mailgo';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsType) {
  useEffect(() => {
    mailgo();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
