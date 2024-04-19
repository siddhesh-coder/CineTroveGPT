import React from "react";
import MoviesCarousel from "../ui/MoviesCarousel";
import useFetch from "../../hooks/useFetch";
import { POPULAR, TOP_RATED, UPCOMING } from "../../utils/constants";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const { shareData: popular } = useFetch(POPULAR);
  const { shareData: topRated } = useFetch(TOP_RATED);
  const { shareData: upComing } = useFetch(UPCOMING);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  return (
    <div className="relative z-20 -mt-52">
      <MoviesCarousel title={"Now Playing"} moviesList={movies} />
      <MoviesCarousel title={"Top Rated"} moviesList={topRated} />
      <MoviesCarousel title={"Popular"} moviesList={popular} />
      <MoviesCarousel title={"Upcoming"} moviesList={upComing} />
    </div>
  );
};

export default SecondaryContainer;
