import React from "react";
import LOGO from "../../assets/logo.png";
import GPTButton from "../ui/GPTButton";
import Signout from "../ui/Signout";

const BrowseHeader = () => {
  return (
    <header className="absolute z-50 flex items-center justify-between w-screen px-6 py-4 text-white lg:px-1 bg-gradient-to-b from-black to-custom-gradient">
      <img className="w-36 lg:ml-10 md:w-40 lg:w-44" src={LOGO} alt={LOGO} />
      {/* <div className="flex items-center justify-center">
        <GPTButton/>
        <Signout/>
      </div> */}
    </header>
  );
};

export default BrowseHeader;

//!FIX THIS HEADER and also crousel for mobile