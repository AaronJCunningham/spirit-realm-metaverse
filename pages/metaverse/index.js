import React, { useState, useEffect } from "react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useLogout } from "@thirdweb-dev/react";
import { getUser } from "../../auth.config";
import checkBalance from "../../utils/checkBalance";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
      console.log("mobile", isMobile);
    }
  };

  useEffect(() => {
    checkMobile();
    console.log(isMobile);
  }, []);

  const logout = useLogout();

  return (
    <>
      <div className="describe">
        welcome to the fuckshop
        {isMobile && <p>SORRY DOESN|"T WORK ON MOBILE</p>}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const user = await getUser(context.req);
  console.log("user", user);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Ensure we are able to generate an auth token using our private key instantiated SDK
  const PRIVATE_KEY =
    "9e413db3f8957217067ee83acecb437d1d0e914bad4d704e0c1c845a2fdbb0df";
  if (!PRIVATE_KEY) {
    throw new Error("You need to add an PRIVATE_KEY environment variable.");
  }

  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(
    "9e413db3f8957217067ee83acecb437d1d0e914bad4d704e0c1c845a2fdbb0df",
    "goerli"
  );

  // Check to see if the user has an NFT
  const hasNft = await checkBalance(sdk, user.address);

  // If they don't have an NFT, redirect them to the login page
  if (!hasNft) {
    console.log("User", user.address, "doesn't have an NFT! Redirecting...");
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Finally, return the props
  return {
    props: {},
  };
}
