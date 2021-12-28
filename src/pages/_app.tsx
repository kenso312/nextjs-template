import '@style/global.css';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main id="content">
      <Component {...pageProps} />
    </main>
  );
}

// This disables the ability to perform automatic static optimization,
// causing every page in the app to be server-side rendered.
// https://nextjs.org/docs/basic-features/typescript#custom-app
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   return { ...appProps };
// };

export default appWithTranslation(MyApp);
