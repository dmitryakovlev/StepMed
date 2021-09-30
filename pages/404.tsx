import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon.webp"></link>
      </Head>
      <main className="grid items-center min-h-full grid-cols-1 2xl:grid-cols-2">
        <div className="z-10 max-w-xl p-4 m-auto md:p-8">
          <h1 className="2xl:text-6xl">Страница не найдена</h1>
          <p className="custom-text">
            Страница устарела, была удалена или не существовала вовсе
          </p>
          <a href="/" className="mt-8 bttn md:mt-10 lg:mt-12">
            Вернуться на главную
          </a>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden opacity-10 2xl:opacity-100 2xl:static">
          <img src="/images/illustrations/error.webp" />
        </div>
      </main>
    </>
  );
}
