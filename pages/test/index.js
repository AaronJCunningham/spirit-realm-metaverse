import dynamic from "next/dynamic";

const SpiritRealm = dynamic(() => import("../../metaverseapp/SpiritRealm"), {
  ssr: false,
});

const Test = () => {
  return <SpiritRealm isMobile={true} />;
};

export default Test;
