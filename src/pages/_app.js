import '@/styles/base.scss';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>欧洲彩</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
