import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import SvgComponent from "../../components/logo/SvgComponent";
import Logo from "../../components/logo/Logo";
import MetaDataHeader from "../../components/metaheader/MetaDataHeader";

const SpiritRealmApp = dynamic(() => import("../../metaverseapp/SpiritRealm"), {
  ssr: false,
});

const desc =
  "The Shiloh and Spirit Realm metaverse is constantly evolving and NFT holders within our community have the ability to vote on the future developments of the movie and metaverse.";

export default function Home() {
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
      <MetaDataHeader title={"Metaverse"} content={desc} />
      {!isMobile ? (
        <div className="canvas">
          <SpiritRealmApp />
        </div>
      ) : (
        <div className="page-container">
          <h3>Our Metaverse Is Currently Not Available For Mobile</h3>
          <p>Please try again when you are on your computer.</p>
          <Image src="/white_drawn_new_logo_200.png" width={200} height={200} />
        </div>
      )}
    </>
  );
}
