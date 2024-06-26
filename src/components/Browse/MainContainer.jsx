import React from "react";
import { useSelector } from "react-redux";
import VideoScreen from "./VideoScreen";
import VideoTitle from "./VideoTitle";
import { Spinner } from "@material-tailwind/react";

const MainContainer = () => {
  const trailer = useSelector((store) => store.moviesList?.nowPlayingMovies);
  if (!trailer) return <Spinner/>;
  const { original_title, overview, id } = trailer[16] || "";

  return (
    <div className="relative w-full h-full text-white">
      <VideoScreen id={id} />
      <VideoTitle title={original_title} detail={overview} id={id} />
    </div>
  );
};

export default MainContainer;
