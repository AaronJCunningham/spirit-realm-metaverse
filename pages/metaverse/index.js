import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

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

  return (
    <div className="canvas">
      <SpiritRealmApp />
    </div>
  );
}
