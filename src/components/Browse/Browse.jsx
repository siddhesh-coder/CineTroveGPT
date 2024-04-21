import React, { useEffect } from "react";
import BrowseHeader from "./BrowseHeader";
import { NOW_PLAYING, POPULAR, TOP_RATED, TRENDING, UPCOMING } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrendingMovies, addUpComingMovies } from "../../utils/Store/Slices/browseMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchAll from "../../hooks/useFetchAll";
import { Spinner } from "@material-tailwind/react";

const Browse = () => {
  const { shareData, loading, error } = useFetchAll([
    NOW_PLAYING,
    POPULAR,
    TRENDING,
    TOP_RATED,
    UPCOMING,
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNowPlayingMovies(shareData[0]));
    dispatch(addPopularMovies(shareData[1]));
    dispatch(addTrendingMovies(shareData[2]));
    dispatch(addTopRatedMovies(shareData[3]));
    dispatch(addUpComingMovies(shareData[4]));
  }, [dispatch, shareData]);

  if(loading) return <Spinner/>
  
  if(error) return <div>Error</div>

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
