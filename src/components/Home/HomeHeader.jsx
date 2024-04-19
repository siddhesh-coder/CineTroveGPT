import React from "react";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AUTH_BUTTON } from "../../utils/constants";

const HomeHeader = () => {
  return (
    <header className="z-10 flex items-center justify-between w-full px-6 py-4 text-white lg:px-10 bg-gradient-to-b from-black to-custom-gradient">
      <img className="w-36 lg:ml-20 md:w-40 lg:w-44" src={LOGO} alt="company" />
      <Link
        to={"/auth"}
        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl lg:mr-20 group hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white">{AUTH_BUTTON[0]}</span>
      </Link>
    </header>
  );
};

export default HomeHeader;
