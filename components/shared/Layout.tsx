import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import NavBar from '@components/shared/NavBar';
import Registration from '@components/shared/Registration';
import Footer from '@components/shared/Footer';

const backlessLayoutPages = ['/', '/another-page'];

const Scroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  let hide = true;
  if (scrollPosition <= 400) {
    hide = false;
  }

  const topOfPage = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        onClick={topOfPage}
        className={`main-scroll custom-link ${hide ? '' : 'disable'}`}
      ></div>
    </>
  );
};

const Layout: FC<{
  title: string;
}> = ({ title, children }) => {
  const router = useRouter();
  const isHasBack = !backlessLayoutPages.includes(router.pathname);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="yandex-verification" content="de459bcbb344b785" />
        <meta
          name="keywords"
          content="step-med, step-med clinic, stepmed, stepmed clinic, степ-мед, степ-мед клиник, степмед, степмед клиник, степмед клиника, лечение онкологии, исследования онкология, исследования онкологических заболеваний, онкология, онкологи, онколог, доктор-онколог, доктор онколог"
        ></meta>
        <link rel="shortcut icon" href="/images/favicon.webp"></link>
      </Head>
      <div className="main-layout">
        {/* <Registration /> */}
        <NavBar />
        <main className="main-block">
          {isHasBack && (
            <>
              <div className="container flex-row mt-8 md:mt-10 lg:mt-12 2xl:mt-16">
                <a href="/" className="main-back">
                  <span className="main-back-icon"></span>
                  <span className="main-back-text">На главную</span>
                </a>
              </div>
              <Scroll />
            </>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
