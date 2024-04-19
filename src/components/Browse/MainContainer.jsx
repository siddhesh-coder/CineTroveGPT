import React from "react";
import { useSelector } from "react-redux";
import VideoScreen from "./VideoScreen";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const trailer = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!trailer) return;
  const { original_title, overview, id } = trailer[16] || "";

  return (
    <div className="relative w-full h-full text-white">
      <VideoScreen id={id} />
      <VideoTitle title={original_title} detail={overview} />
    </div>
  );
};

export default MainContainer;
