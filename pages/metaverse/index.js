import React, { useState, useEffect } from "react";

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
      <div className="description">
        welcome to the fuckshop
        {isMobile && <p>SORRY DOESNT WORK ON MOBILE</p>}
      </div>
    </>
  );
}
