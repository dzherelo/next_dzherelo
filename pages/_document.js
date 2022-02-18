import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='bg-brand-background text-white xl:mx-24 lg:mx-16 md:mx-8 sm:mx-4 mx-2'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}