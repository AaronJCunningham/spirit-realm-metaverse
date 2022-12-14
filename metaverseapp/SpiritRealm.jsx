import { Canvas, Stages } from "@react-three/fiber";
import { Stats, Loader } from "@react-three/drei";
import {
  StrictMode,
  Suspense,
  useLayoutEffect,
  useState,
  useEffect,
} from "react";
import { CameraController } from "./camera/camera-controller";

import { Collider } from "./collider/collider";
import Space from "./test-assets/Space";
import { PlayerController } from "./player/player-controller";

import { TestExtenstionTerrain } from "./test-assets/test-extension-terrain";
import { InputSystem } from "./input/input-system";
import { RemotePlayers } from "./remoteplayers/RemotePlayers";
import { Chat } from "./chat/Chat";
import Shader from "./shader/Portal";
import { Ghost } from "./remoteplayers/Ghost10";
import { PortalWorld } from "./test-assets/Portalworld12";
import { MetaMenu } from "./menu/MetaMenu";
import { Instructions } from "./instructions/Instructions";

const FIXED_STEP = 1 / 60;

function Game() {
  // Set fixed step size.
  useLayoutEffect(() => {
    Stages.Fixed.fixedStep = FIXED_STEP;
  }, []);

  return (
    <Suspense>
      <InputSystem />
      <RemotePlayers />
      <Shader />
      <Collider autoUpdate debug>
        <PortalWorld />
      </Collider>
      <PlayerController debug={true}>
        <Ghost rotation={[0, -Math.PI, 0]} />
      </PlayerController>
      <CameraController />
      <Stats />
      <Space />
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.5} color="#eacb6e" groundColor="blue" />
      <spotLight
        castShadow
        color="#edbf6f"
        intensity={100}
        position={[80, 50, -40]}
        angle={0.35}
        penumbra={1}
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.00001}
      />
    </Suspense>
  );
}

export default function SpiritRealm() {
  return (
    <>
      <Chat />
      <MetaMenu />
      <Instructions />
      <Canvas shadows gl={{ physicallyCorrectLights: true }}>
        <StrictMode>
          <Game />
        </StrictMode>
      </Canvas>
      <Loader />
    </>
  );
}
