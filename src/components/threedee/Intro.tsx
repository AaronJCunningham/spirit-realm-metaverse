import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Intro = () => {
  const meshRef = useRef<any>(null);
  const scroll = useScroll();

  useFrame(() => {
    const { offset } = scroll;

    meshRef.current.rotation.y = offset * 5;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};
