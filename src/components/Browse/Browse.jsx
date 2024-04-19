import React, { useEffect } from "react";
import BrowseHeader from "./BrowseHeader";
import useFetch from "../../hooks/useFetch";
import { NOW_PLAYING } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/Store/Slices/nowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const { shareData } = useFetch(NOW_PLAYING);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNowPlayingMovies(shareData));
  }, [dispatch, shareData]);
  
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
