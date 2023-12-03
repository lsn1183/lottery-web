import '@/style/globals.css'
import 'antd-mobile/bundle/css-vars-patch.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '新加坡新彩',
  description: '港澳台新加坡菲律宾泰国',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>彩票</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
