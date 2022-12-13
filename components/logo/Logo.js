import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <Image src="/logo_sigil_white.svg" width={200} height={200} />
    </div>
  );
};

export default Logo;
