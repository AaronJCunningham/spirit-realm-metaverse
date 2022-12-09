import { OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Intro } from "./Intro";
import { Effects } from "./Effects";
import { Ghost } from "./Animatedghost01";
import { Lighting } from "./Lighting";
import { Suspense } from "react";

import { Shiloh } from "./Shiloh1";

import { useProgressStore } from "../../store";
import { useEffect } from "react";

const HomePageOne = () => {
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
      <Canvas>
        <Suspense fallback={null}>
          <Effects />
          <Lighting />

          {/* <Intro /> */}
          <Shiloh />
        </Suspense>
        {/* <OrbitControls enableZoom={false} autoRotate /> */}
      </Canvas>
    </div>
  );
};

export default HomePageOne;
