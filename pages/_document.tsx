import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="bg-gray-800">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Hind:wght@300;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="pb-24">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument