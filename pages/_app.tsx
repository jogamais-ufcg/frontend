import 'styles/globals.css';
import 'styles/calendar.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { RegisterFlowProvider } from 'contexts/registerFlow';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RegisterFlowProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RegisterFlowProvider>
  );
}
