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
      </Head>
      <div>{props.children}</div>;
    </>
  );
}

export default Layout;
