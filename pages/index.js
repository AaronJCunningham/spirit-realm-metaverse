import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Loader } from "../components/threedee/Loader";
import { useProgressStore } from "../store";
import Menu from "../components/menu/Menu";
import { useIsMobile } from "../hooks/useIsMobile";

const HomePageOne = dynamic(
  () => import("../components/threedee/HomePageOne"),
  {
    ssr: false,
  }
);

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [progressStore, setProgressStore] = useProgressStore((state) => [
    state.progressStore,
    state.setProgressStore,
  ]);

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

  return (
    <>
      {/* <Loader progress={progressStore} /> */}

      <div className="main-container">
        <div className="pageone-container">
          <HomePageOne isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default Home;
