import { OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Intro } from "./Intro";
import { Effects } from "./Effects";

import { Lighting } from "./Lighting";
import { Suspense } from "react";

import { Shiloh } from "./Shiloh06";

import { useProgressStore } from "../../store";
import { useEffect } from "react";
import BallLight from "./BallLight";
import { TextForLandingPage } from "./TextForLandingPage";

const HomePageOne = ({ isMobile }) => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  const [progressStore, setProgressStore] = useProgressStore((state) => [
    state.progressStore,
    state.setProgressStore,
  ]);

  useEffect(() => {
    setProgressStore(progress);
  }, [progress]);

  return (
    <div className="canvas">
      {/* <TextForLandingPage progress={progress} /> */}
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
