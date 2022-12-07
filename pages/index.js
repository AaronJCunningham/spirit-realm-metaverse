import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@react-three/drei";

const HomePage = dynamic(() => import("../components/threedee/HomePage"), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
