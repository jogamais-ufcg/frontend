import Head from 'next/head';
import styles from './styles.module.css';

interface PageContainerProps {
  children: React.ReactNode;
  headTitle?: string;
}

function PageContainer({ children, headTitle }: PageContainerProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{headTitle} | Joga+ UFCG</title>
      </Head>

      {children}
    </div>
  );
}

export default PageContainer;
