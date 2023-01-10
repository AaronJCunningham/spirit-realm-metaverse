import { Stages, useUpdate } from '@react-three/fiber';
import { useRef } from 'react';
import { Stars } from '@react-three/drei';

export default function Space() {
  return (
    <>
      <Stars radius={100} depth={10} count={500} factor={4} saturation={10} fade speed={2} />
    </>
  );
}

// radius?: number
// depth?: number
// count?: number
// factor?: number
// saturation?: number
// fade?: boolean
// speed?: number
