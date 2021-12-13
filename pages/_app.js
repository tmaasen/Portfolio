import "../styles/styles.css";
import Head from "next/head";

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
        <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
