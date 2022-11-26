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

    if (typeof headTitle !== 'string') {
      return defaultTitle;
    }

    return headTitle ? `${headTitle} | ${defaultTitle}` : defaultTitle;
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
