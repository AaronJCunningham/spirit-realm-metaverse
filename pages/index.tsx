import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import MetaDataHeader from "../components/metaheader/MetaDataHeader";

//G-6J7B5QK5HG

interface SpiritRealmProps {
  isMobile?: boolean;
}

const SpiritRealm = dynamic<SpiritRealmProps>(
  () => import("../metaverseapp/SpiritRealm") as any,
  { ssr: false }
);

const Shiloh = dynamic(() => import("../components/threedee/HomePageOne"), {
  ssr: false,
});

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkMobile();
  }, []);

  return (
    <>
      {/* <Loader progress={progressStore} /> */}
      <MetaDataHeader />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6J7B5QK5HG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <div className="main-container">
        <div className="pageone-container">
          {isMobile ? <Shiloh /> : <SpiritRealm isMobile={isMobile} />}
        </div>
      </div>
    </>
  );
};

export default Home;
