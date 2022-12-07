import { Loader, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Intro } from "./Intro";
import { Effects } from "./Effects";
import { Ghost } from "./Animatedghost01";
import { Lighting } from "./Lighting";
import { Suspense } from "react";
import { Menu } from "../menu";

const HomePage = () => {
  return (
    <div className="canvas">
      <Menu />
      <Canvas>
        <Suspense>
          <Effects />
          <Lighting />
          <ScrollControls pages={5}>
            {/* <Intro /> */}
            <Ghost />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default HomePage;
