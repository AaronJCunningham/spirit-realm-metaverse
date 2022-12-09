import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Intro } from "./Intro";
import { Effects } from "./Effects";
import { Ghost } from "./Animatedghost01";
import { Lighting } from "./Lighting";
import { Suspense } from "react";

const HomePageTwo = () => {
  return (
    <div className="canvas">
      <Menu />
      <Canvas>
        <Suspense fallback={null}>
          <Effects />
          <Lighting />

          {/* <Intro /> */}
          <Ghost />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomePageTwo;
