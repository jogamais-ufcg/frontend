import Head from 'next/head';
import { useMemo } from 'react';
import styles from './styles.module.css';

interface PageContainerProps {
  children: React.ReactNode;
  headTitle?: string;
}

function PageContainer({ children, headTitle = '' }: PageContainerProps) {
  const title = useMemo(() => {
    const defaultTitle = 'Joga+ UFCG';

    if (!headTitle || typeof headTitle !== 'string') {
      return defaultTitle;
    }

    return `${headTitle} | ${defaultTitle}`;
  }, [headTitle]);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  );
}

export default PageContainer;
