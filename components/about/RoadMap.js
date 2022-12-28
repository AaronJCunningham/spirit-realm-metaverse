import Image from "next/image";

export const RoadMap = () => {
  return (
    <>
      <div className="description">
        <h4 className="about-h4">Roadmap 2023</h4>
      </div>

      <div className="roadmap">
        <Image src={"/roadmap.svg"} width={1160} height={480} />
      </div>
    </>
  );
};
