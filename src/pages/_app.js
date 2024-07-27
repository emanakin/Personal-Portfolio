import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config as faConfig } from '@fortawesome/fontawesome-svg-core';
import { Toaster } from 'react-hot-toast';
import Layout from '@/components/Layout';
import Head from 'next/head';

faConfig.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
      </Head>
      <Layout>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
