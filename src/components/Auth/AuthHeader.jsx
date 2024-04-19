import React from "react";
import LOGO from "../../assets/logo.png";

const AuthHeader = () => {
  return (
    <header className="absolute z-10 flex items-center justify-between w-full px-6 py-4 text-white lg:px-10 bg-gradient-to-b from-black to-custom-gradient">
      <img className="w-36 lg:ml-20 md:w-40 lg:w-44" src={LOGO} alt="company" />
    </header>
  );
};

export default AuthHeader;
