import React from "react";
import Navbar from "./component/navbar/navbar";
import Section1 from "./component/page1/page1";
import Section2 from "./component/page2/page2";
import Section3 from "./component/page3/page3";
import Section4 from "./component/page4/page4";
import Section5 from "./component/page5/page5";
import Section6 from "./component/page6/page6";
import Section7 from "./component/page7/page7";
import Section8 from "./component/page8/page8";
import Footer from "./component/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </>
  );
}
