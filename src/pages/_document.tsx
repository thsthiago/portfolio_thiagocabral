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
          <link rel="icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
          <meta name="description" content="Thiago Cabral | Desenvolvedor Web" />
          <meta property='og:title' content='Thiago Cabral | Desenvolvedor Web' />
          <meta property='og:image' content='https://raw.githubusercontent.com/thsthiago/portfolio_thiagocabral/f8a42e99ba39e2e1f7a805d89339eb8d63a57a7f/public/socialImage.svg' />
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