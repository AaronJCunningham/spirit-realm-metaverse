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
import Space from "./world/Space";
import { PlayerController } from "./player/player-controller";
import { useHover } from "./store/MetaStore";

import { InputSystem } from "./input/input-system";
import { RemotePlayers } from "./remoteplayers/RemotePlayers";
import { Chat } from "./chat/Chat";
import Shader from "./shader/Portal";
import { Ghost } from "./remoteplayers/Ghost10";
import { PortalWorld } from "./world/Portalworld15";
import { MetaMenu } from "./menu/MetaMenu";
import { TextForMetaPage } from "./loading/TextForMetaPage";
import { Instructions } from "./instructions/Instructions";
import { MobileControls } from "./joystick/Joystick";
import { Ghosts } from "./addons/Ghosts";
import { ExhibitPopUp } from "./exhibitpopup/ExhibitPopUp";

const FIXED_STEP = 1 / 60;

function Game({ isMobile }) {
  useLayoutEffect(() => {
    Stages.Fixed.fixedStep = FIXED_STEP;
  }, []);

  return (
    <Suspense>
      <InputSystem />
      <RemotePlayers />
      {/* <Ghosts /> */}
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
      <ambientLight intensity={0.7} />
      <hemisphereLight intensity={1.7} color="#eacb6e" groundColor="blue" />
    </Suspense>
  );
}

export default function SpiritRealm({ isMobile }) {
  const [loaded, setLoaded] = useState(false);

  const [hover, setHover] = useHover((state) => [state.hover, state.setHover]);

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [progress]);

  return (
    <div className="canvas" style={{ cursor: hover ? "pointer" : null }}>
      <Chat loaded={loaded} />
      {loaded && <MetaMenu />}
      <ExhibitPopUp />
      {isMobile && <MobileControls />}
      {!loaded && <TextForMetaPage progress={progress} />}
      {loaded && <Instructions />}
      <Canvas shadows gl={{ physicallyCorrectLights: true }}>
        <StrictMode>
          <Game isMobile={isMobile} />
        </StrictMode>
      </Canvas>
    </div>
  );
}
