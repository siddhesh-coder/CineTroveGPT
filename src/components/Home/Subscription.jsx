import React from "react";
import BackgroundGradient from "../ui/BackgroundGradient.tsx";
import { BUY } from "../../utils/constants.js";

const Subscription = ({ title, description, price }) => {
  return (
    <div className="cursor-pointer mt-7"> 
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-5 dark:bg-zinc-900 h-[240px]">
        <p className="mt-4 mb-2 text-lg text-black sm:text-xl dark:text-neutral-200">
          {title}
        </p>

        <p className="text-base text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <button className="flex items-center py-1 pl-4 pr-1 mt-4 space-x-1 text-sm font-bold text-white bg-black rounded-full dark:bg-zinc-800">
          <span>{BUY}</span>
          <span className="px-2 py-0 text-base text-white rounded-full bg-zinc-700">
            {price}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
};

export default Subscription;
