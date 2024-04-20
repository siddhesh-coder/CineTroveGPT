import { Info, Play } from "lucide-react";
import React, { useState } from "react";
import truncateText from "../../utils/helper";
import { PLAY, MORE_INFO } from "../../utils/constants";
import Details from "../Browse/Details";

const VideoTitle = ({ title, detail, id }) => {
  const [dialog, setDialog] = useState({ value: null, id: null });
  const handleOpen = (value, id) => setDialog({ value: value, id: id });
  return (
    <>
      <div className="absolute flex flex-col w-4/5 gap-4 text-left top-24 md:w-2/3 lg:w-1/2 lg:top-28 left-8 md:left-16 lg:left-12">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-base md:text-xl lg:text-xl lg:w-full">
          {detail && truncateText(detail, 3)}
        </p>
        <div className="flex mt-4">
          <button
            type="button"
            onClick={() => handleOpen("xxl", id)}
            className="flex items-center justify-center w-24 p-2 text-black bg-white rounded-sm hover:bg-slate-200"
          >
            <Play />
            <span className="ml-2">{PLAY}</span>
          </button>
          <button
            type="button"
            onClick={() => handleOpen("xxl", id)}
            className="flex items-center justify-center p-2 ml-2 bg-gray-600 rounded-sm opacity-60 w-36"
          >
            <Info />
            <span className="ml-2 text-white">{MORE_INFO}</span>
          </button>
        </div>
      </div>
      {dialog.value && <Details dialog={dialog} handleOpen={handleOpen} />}
    </>
  );
};

export default VideoTitle;
