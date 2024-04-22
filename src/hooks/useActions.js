import { setActivePage } from "../utils/Store/Slices/activePage";
import { setGenreID } from "../utils/Store/Slices/genres";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrendingMovies, addUpComingMovies } from "../utils/Store/Slices/browseMovies";
import { useEffect } from "react";

const useActions = (shareData) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNowPlayingMovies(shareData[0]));
    dispatch(addPopularMovies(shareData[1]));
    dispatch(addTrendingMovies(shareData[2]));
    dispatch(addTopRatedMovies(shareData[3]));
    dispatch(addUpComingMovies(shareData[4]));
  }, [dispatch, shareData]);

  const next = (activePage) => {
    if (activePage === 5) return;
    dispatch(setActivePage(activePage + 1));
  };

  const prev = (activePage) => {
    if (activePage === 1) return;
    dispatch(setActivePage(activePage - 1));
  };

  const getItemProps = (index, activePage) => {
    return {
      variant: activePage === index ? "filled" : "text",
      color: "gray",
      onClick: () => dispatch(setActivePage(index)),
    };
  };

  const handleResetActivePage = () => {
    dispatch(setActivePage(1));
  };

  const getGenreID = (id) => {
    dispatch(setGenreID(id));
  };

  return {
    next,
    prev,
    getItemProps,
    handleResetActivePage,
    getGenreID,
  };
};

export default useActions;
