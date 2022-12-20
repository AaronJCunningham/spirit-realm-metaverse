import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/index.scss";
import Head from "next/head";

import { CookieAccept } from "../components/cookies/CookieAccept";
import Menu from "../components/menu/Menu";
import Logo from "../components/logo/Logo";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <CookieAccept />
      <Logo />
      <Menu />
      <ThirdwebProvider desiredChainId={activeChainId}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
