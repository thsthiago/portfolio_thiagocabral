import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
          <meta name="author" content="Thiago Cabral" /> 
          <meta name="keywords" content="Portfólio, Programação" /> 
          <meta name="description" content="Thiago Cabral | Desenvolvedor Front-end" />
          <meta property='og:title' content='Thiago Cabral | Desenvolvedor Front-end' />
          <meta property='og:image' content='/socialImage.svg' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument