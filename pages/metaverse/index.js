import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import SvgComponent from "../../components/logo/SvgComponent";

const SpiritRealmApp = dynamic(() => import("../../metaverseapp/SpiritRealm"), {
  ssr: false,
});

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

  return !isMobile ? (
    <div className="canvas">
      <SpiritRealmApp />
    </div>
  ) : (
    <div className="page-container">
      <h3>Our Metaverse Is Currently Not Available For Mobile</h3>
      <p>Please try again when you are on your computer.</p>
      <SvgComponent />
    </div>
  );
}
