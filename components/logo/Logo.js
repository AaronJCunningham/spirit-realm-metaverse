import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo-container">
      <Image src="/white_drawn_new_logo_200.png" width={200} height={200} />
    </div>
  );
};

export default Logo;
