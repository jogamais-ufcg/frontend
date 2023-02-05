import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import 'styles/calendar.css';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import { RegisterFlowProvider } from 'contexts/registerFlow';
import { AuthProvider } from 'contexts/auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <RegisterFlowProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RegisterFlowProvider>
    </AuthProvider>
  );
}
