import Image from "next/image";
import SvgComponent from "./SvgComponent";

const Logo = () => {
  return (
    <div className="logo-container">
      {/* <Image src="/logo_sigil_white.svg" width={200} height={200} /> */}
      <SvgComponent />
    </div>
  );
};

export default Logo;
