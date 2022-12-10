import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BallLight = () => {
  const lightRef = useRef();
  let sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
  let sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    opacity: 0.5,
    transparent: true,
  });
  let sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // create the light
  let light = new THREE.PointLight(0x00ffff, 0.5, 100);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    lightRef.current.rotation.y = Math.sin(t / 1) / 8;
    lightRef.current.position.y = 1;
    lightRef.current.position.x = (2 + Math.sin(t / 1)) / 10;
    lightRef.current.position.z = (3 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group position={[0, 0, 0]} ref={lightRef}>
      <primitive object={sphere} scale={0.01} />
      <primitive object={light} />
    </group>
  );
};

export default BallLight;
