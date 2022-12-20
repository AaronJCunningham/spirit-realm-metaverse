import Image from "next/image";

export const RoadMap = () => {
  return (
    <div className="description">
      <h4>Roadmap 2023</h4>
      <div className="roadmap">
        <Image src={"/roadmap.svg"} width={580} height={240} />
      </div>
    </div>
  );
};
