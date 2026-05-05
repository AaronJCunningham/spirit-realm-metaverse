import { OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Intro } from "./Intro";
import { Effects } from "./Effects";

import { Lighting } from "./Lighting";
import { Suspense, useState } from "react";

import { Shiloh } from "./Shiloh06";

import { useEffect } from "react";
import BallLight from "./BallLight";
import { TextForLandingPage } from "./TextForLandingPage";
import { MobilePopUp } from "./MobilePopUp";

interface HomePageOneProps {
  isMobile?: boolean;
}

const HomePageOne = ({ isMobile }: HomePageOneProps) => {
  const [loaded, setLoaded] = useState(false);

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [progress]);

  return (
    <div className="canvas">
      {loaded && <MobilePopUp />}
      <TextForLandingPage progress={progress} isMobile={isMobile} />
      <Canvas
        camera={{
          fov: 15,
          near: 0.1,
          far: 1000,
          position: isMobile ? [1, -0.1, 2.9] : [1, -0.3, 2.9],
        }}
      >
        <Suspense>
          <Effects />
          <Lighting />
          <BallLight />

          {/* <Intro /> */}
          <Shiloh />
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
};

export default HomePageOne;
