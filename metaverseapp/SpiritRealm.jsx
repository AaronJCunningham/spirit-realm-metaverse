import { Canvas, Stages } from "@react-three/fiber";
import { Stats, Loader, useProgress } from "@react-three/drei";
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

import { InputSystem } from "./input/input-system";
import { RemotePlayers } from "./remoteplayers/RemotePlayers";
import { Chat } from "./chat/Chat";
import Shader from "./shader/Portal";
import { Ghost } from "./remoteplayers/Ghost10";
import { PortalWorld } from "./test-assets/Portalworld15";
import { MetaMenu } from "./menu/MetaMenu";
import { TextForMetaPage } from "./loading/TextForMetaPage";
import { Instructions } from "./instructions/Instructions";
import { MobileControls } from "./joystick/Joystick";

const FIXED_STEP = 1 / 60;

function Game() {
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
      <PlayerController>
        <Ghost rotation={[0, -Math.PI, 0]} />
      </PlayerController>
      <CameraController />
      {/* <Stats /> */}
      <Space />
      <ambientLight intensity={0.4} />
      <hemisphereLight intensity={1.2} color="#eacb6e" groundColor="blue" />
    </Suspense>
  );
}

export default function SpiritRealm() {
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
      <Chat />
      <MetaMenu />
      {/* <MobileControls /> */}
      {!loaded && <TextForMetaPage progress={progress} />}
      {loaded && <Instructions />}
      <Canvas shadows gl={{ physicallyCorrectLights: true }}>
        <StrictMode>
          <Game />
        </StrictMode>
      </Canvas>
    </div>
  );
}
