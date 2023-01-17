import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei/core";
import * as THREE from "three";
import { useEffect } from "react";

export const Ghosts = () => {
  const ref = useRef();
  const meshRef = useRef();

  useEffect(() => {
    // meshRef.current.material.transparent = true;
    // meshRef.current.material.opacity = 0.4;
    ref.current.position.x = 1;
    ref.current.position.y = 0.2;
    ref.current.position.z = -1;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    ref.current.position.x += Math.sin(time * 0.5) * delta;
    ref.current.position.z += Math.cos(time * 0.5) * delta;
  });
  return (
    <group ref={ref}>
      <pointLight intensity={0.5} color={"white"} />
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.1, 21, 30]} scale={0.2} />
        <MeshDistortMaterial
          color={"#8db1e7"}
          attach="material"
          factor={3 + Math.random() * 10} // Strength, 0 disables the effect (default=1)
          speed={1 + Math.random() * 5} // Speed (default=1)
          opacity={0.8}
          transparent={true}
          reflectivity={1}
          roughness={0.15}
          side={2}
        />
      </mesh>
    </group>
  );
};
