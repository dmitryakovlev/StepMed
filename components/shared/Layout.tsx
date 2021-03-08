import { FC } from 'react';
import Head from 'next/head';
import NavBar from '@components/shared/NavBar';
import Registration from '@components/shared/Registration';
import Footer from '@components/shared/Footer';

const Layout: FC<{
  title: string;
  children: JSX.Element | JSX.IntrinsicElements;
}> = ({ title, children }) => (
  <div className="main-layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="yandex-verification" content="de459bcbb344b785" />
      <link rel="shortcut icon" href="/images/favicon.webp"></link>
    </Head>
    {/* <Registration /> */}
    <NavBar />
    <main className="main-block">{children}</main>
    <Footer />
  </div>
);

export default Layout;
