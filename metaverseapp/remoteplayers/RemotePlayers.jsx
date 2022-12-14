import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { SinglePlayer } from "./SinglePlayer";

import * as THREE from "three";
import socket from "../socketUtlities/socketConnection";
import { useEffect } from "react";

export const RemotePlayers = () => {
  const [remoteData, setRemoteData] = useState([
    { x: 0, y: 0, z: 0, id: "iug", username: "Shiloh", color: "" },
  ]);

  const id = socket.id;

  useEffect(() => {
    socket.on("remoteData", (data) => {
      setRemoteData(data);
    });
  }, []);
  // console.log('remoteplayers', id);

  const newData = remoteData.filter((data) => {
    return data.id !== id;
  });

  // console.log(newData);

  return newData.map((data) => {
    return <SinglePlayer position={data} key={data.id || Math.random()} />;
  });
};
