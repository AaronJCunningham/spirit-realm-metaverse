import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/index.scss";
import Head from "next/head";
import Menu from "../components/menu/Menu";
import Logo from "../components/logo/Logo";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "example.com",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <Logo />
      <Menu />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
