import React from "react";
import { videoConfig } from "../../utils/constants";

const VideoPlayer = ({ VideoKey, width, height }) => {
  return (
    <>
      <iframe
        className={`w-${width} h-${height} aspect-video`}
        src={`https://www.youtube.com/embed/${VideoKey}?${Object.entries(videoConfig).map(([key, value]) => `${key}=${value}`).join('&')}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
     <div className="absolute z-10 w-full h-48 bg-opacity-90 top-3/4 bg-gradient-to-t from-black to-transparent"/>
    </>
  );
};

export default VideoPlayer;
