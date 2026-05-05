import dynamic from "next/dynamic";

interface SpiritRealmProps {
  isMobile?: boolean;
}

const SpiritRealm = dynamic<SpiritRealmProps>(
  () => import("../../metaverseapp/SpiritRealm") as any,
  { ssr: false }
);

const Test = () => {
  return <SpiritRealm isMobile={true} />;
};

export default Test;
