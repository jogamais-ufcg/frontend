import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Joga+ UFCG</title>
        <meta
          name="description"
          content="Todas as quadras da UFCG disponíveis para agendamento fácil pelo site"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#233043" />
        <meta name="msapplication-navbutton-color" content="#233043" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#233043" />
      </Head>
      <div>{props.children}</div>
    </>
  );
}

export default Layout;
