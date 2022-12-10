import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div id="team" className="about_content">
      <div className="grid-container">
        <Image
          src="/images/stacie.jpg"
          className="grid-item"
          width={400}
          height={300}
        />
        <Image
          src="/images/stacie.jpg"
          className="grid-item"
          width={400}
          height={300}
        />
      </div>
    </div>
  );
};

export default Team;
