import "../styles/styles.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="images/TM_logo.png"
        />
        <title>Tanner Maasen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
