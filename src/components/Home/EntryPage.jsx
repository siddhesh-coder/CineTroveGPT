import React from "react";
import BgImage from "./BgImage";
import HomeGreet from "./HomeGreet";
import HomeHeader from "./HomeHeader";
import Partition from "../ui/Partition";
import Plans from "./Plans";
import FooterLogin from "../Auth/FooterLogin";

const EntryPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black overflow-x-hidden text-white">
      <div className="relative flex flex-col items-center w-full h-full">
        <BgImage />
        <div className="absolute z-10 w-full h-full bg-custom-gradient2" />
        <HomeHeader />
        <HomeGreet />
        <Partition />
      </div>
      <Plans />
      <FooterLogin/>
    </div>
  );
};

export default EntryPage;
