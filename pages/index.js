import React from "react";
import dynamic from "next/dynamic";

import { Loader } from "../components/threedee/Loader";
import { useProgressStore } from "../store";
import Menu from "../components/menu/Menu";

const HomePageOne = dynamic(
  () => import("../components/threedee/HomePageOne"),
  {
    ssr: false,
  }
);
const HomePageTwo = dynamic(
  () => import("../components/threedee/HomePageTwo"),
  {
    ssr: false,
  }
);

const Home = () => {
  const [progressStore, setProgressStore] = useProgressStore((state) => [
    state.progressStore,
    state.setProgressStore,
  ]);

  return (
    <>
      {/* <Loader progress={progressStore} /> */}

      <div className="main-container">
        <div className="pageone-container">
          <HomePageOne />
        </div>
      </div>
    </>
  );
};

export default Home;
