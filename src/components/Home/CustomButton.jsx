import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HOME_GET_STARTED } from "../../utils/constants";

const CustomButton = () => {
  return (
    <Link
      to={"/auth"}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-3"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex items-center justify-center w-full h-full px-5 py-3 text-base font-semibold text-white bg-black rounded-full cursor-pointer bg-slate-950 lg:text-2xl backdrop-blur-3xl">
        {HOME_GET_STARTED}{" "}
        <span>
          <ChevronRight className="max-md:hidden" />
        </span>
      </span>
    </Link>
  );
};

export default CustomButton;
