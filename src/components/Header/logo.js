import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/">
      <div>
        <Image
          src={profileImg}
          alt="Codebucks"
          className="w-full h-auto rounded-full"
        />
        <span>CodeBucks</span>
      </div>
    </Link>
  );
};

export default Logo;
