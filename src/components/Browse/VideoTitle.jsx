import { Info, Play } from "lucide-react";
import React from "react";
import truncateText from "../../utils/helper";
import { PLAY, MORE_INFO } from "../../utils/constants";

const VideoTitle = ({ title, detail }) => {
  return (
    <div className="absolute flex flex-col w-full gap-4 text-left md:w-2/3 lg:w-1/2 lg:top-1/3 md:top-1/2 left-8 md:left-16 lg:left-12">
      <h1 className="text-4xl font-semibold md:text-5xl lg:text-4xl">{title}</h1>
      <p className="text-base md:text-xl lg:text-xl lg:w-1/2">{detail && truncateText(detail, 3)}</p>
      <div className="flex mt-4">
        <button type="button" className="flex items-center justify-center w-24 p-2 text-black bg-white rounded-sm hover:bg-slate-200">
          <Play />
          <span className="ml-2">{PLAY}</span>
        </button>
        <button type="button" className="flex items-center justify-center p-2 ml-2 bg-gray-600 rounded-sm opacity-60 w-36">
          <Info />
          <span className="ml-2 text-white">{MORE_INFO}</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
