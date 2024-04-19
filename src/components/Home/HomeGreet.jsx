import React from "react";
import CustomButton from "./CustomButton";
import { HOME_GREET } from "../../utils/constants";

const HomeGreet = () => {
  return (
    <div className="z-10 flex items-center justify-center w-full mt-24 text-white lg:mt-40">
      <div className="w-[34%] flex flex-col justify-center items-center">
        <h1 className="lg:text-5xl text-[2rem] md:text-4xl font-bold lg:font-black text-center">
          {HOME_GREET[0]}
        </h1>
        <p className="text-base font-normal text-center lg:text-xl lg:font-medium ">
          {HOME_GREET[1]}
        </p>
        <CustomButton />
      </div>
    </div>
  );
};

export default HomeGreet;
