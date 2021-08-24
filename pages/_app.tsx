import { StoreProvider } from 'easy-peasy';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { useEffect } from 'react';
import mailgo from 'mailgo';

import store from 'store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsType) {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
