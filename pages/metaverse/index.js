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
        {isMobile && <p>SORRY DOESNT WORK ON MOBILE</p>}
      </div>
    </>
  );
}
