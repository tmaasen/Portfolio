import "../styles/styles.css";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../components/Navbar/Navbar";
import SocialLinks from "../components/Social/Social";
import { Provider } from "@lyket/react";

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Provider apiKey={process.env.NEXT_PUBLIC_LYKET}>
        <Head>
          <link rel="icon" type="image/png" href="images/TM_logo.png" />
          <title>Tanner Maasen</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Script src="https://code.iconify.design/2/2.1.0/iconify.min.js"></Script>
        <Navbar />
        <Component {...pageProps} />
        <SocialLinks />
      </Provider>
    </>
  );
}

export default MyApp;
