import { Html } from "@react-three/drei";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LoaderProps {
  progress: number;
}

export const Loader = ({ progress }: LoaderProps) => {
  const [done, setDone] = useState(true);
  useEffect(() => {
    if (progress >= 99) {
      setDone(false);
    }
  }, [progress]);

  return (
    done && (
      <div className="header-svg" style={{ opacity: 1 - progress / 100 }}>
        <Image src={"/logo1.jpg"} width={1023} height={780} />
        <h1 className="loader-h1">{progress}%</h1>
      </div>
    )
  );
};
