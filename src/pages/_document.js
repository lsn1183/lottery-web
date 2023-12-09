import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="欧洲彩" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
