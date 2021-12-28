import Document, { Head, Html, Main, NextScript } from 'next/document';

// _document.tsx will only run on server side, interactive event like onClick will not work in here.
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
