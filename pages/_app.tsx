import { AppPropsType } from 'next/dist/next-server/lib/utils';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppPropsType) => (
  <Component {...pageProps} />
);

export default MyApp;
