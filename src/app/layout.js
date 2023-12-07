import '@/styles/base.scss';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '欧洲彩',
  description: '欧洲彩票',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>欧洲彩</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
