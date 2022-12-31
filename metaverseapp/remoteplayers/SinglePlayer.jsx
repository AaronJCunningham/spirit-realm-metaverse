import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";

import * as THREE from "three";

import { Ghost } from "./GhostCopy";

export const SinglePlayer = ({ position }) => {
  const ref = useRef();
  const textRef = useRef();
  const { x, y, z, qx, qy, qz, qw, id, username, walking, color } = position;

  const R = Math.random();
  const G = Math.random();
  const B = Math.random();

  const quat = new THREE.Quaternion();
  const quat90 = new THREE.Quaternion();
  const eul = new THREE.Euler();

  eul.set(0, Math.PI, 0);
  quat90.setFromEuler(eul);

  useFrame(() => {
    quat.set(qx, qy, qz, qw).multiply(quat90);

    ref.current.position.x = x;
    ref.current.position.y = y - 0.1;
    ref.current.position.z = z;
    textRef.current.position.x = x;
    textRef.current.position.y = y + 0.5;
    textRef.current.position.z = z;

    ref.current.setRotationFromQuaternion(quat);
  });

  return (
    <>
      <group ref={textRef}>
        <Billboard
          follow={true}
          lockX={false}
          lockY={false}
          lockZ={false} // Lock the rotation on the z axis (default=false)
        >
          <Text anchorY="top" fontSize={0.05}>
            {username ? username : "Shiloh"}
          </Text>
        </Billboard>
      </group>
      <group ref={ref}>
        <Ghost r={R} g={G} b={B} singleWalking={walking} color={color} />
      </group>
    </>
  );
};
