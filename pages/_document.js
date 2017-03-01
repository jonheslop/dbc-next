import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
        </Head>
        <body className="athelas">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
