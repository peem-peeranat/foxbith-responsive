import React from "react";
import Image from "next/image";
import profilePic from "../styles/img/img-1/unsplash_XbwHrt87mQ0.png";
import profile2 from "../styles/img/img-1/Rectangle 22.png";

import Navbar from "./component/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Image src={profilePic} width={800} height={500} alt="Picture of the author" />
        <Image src={profile2} width={800} height={500} alt="Picture of the author" />
      </div>
    </>
  );
}
