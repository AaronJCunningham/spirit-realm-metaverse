import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <Image src="/logo1_white.svg" width={200} height={80} />
    </div>
  );
};

export default Logo;
