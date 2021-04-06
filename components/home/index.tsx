import { StoreProvider } from 'easy-peasy';

import Header from './Header';
import Dashboard from './Dashboard';
import About from './About';
import Partners from './Partners';

import { store } from '@components/shared/Layout';

export default function Home() {
  return (
    <>
      <StoreProvider store={store}>
        <Header />
        <Dashboard />
        <About />
        <Partners />
      </StoreProvider>
    </>
  );
}
