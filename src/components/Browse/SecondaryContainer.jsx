import React from "react";
import MoviesCarousel from "../ui/MoviesCarousel";
import useFetch from "../../hooks/useFetch";
import {
  POPULAR,
  TRENDING,
  TOP_RATED,
  UPCOMING,
  MOVIE_LISTS,
} from "../../utils/constants";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

const SecondaryContainer = () => {
  const { shareData: popular, loading: popularLoading, error: popularError } = useFetch(POPULAR);
  const { shareData: trending, loading: trendingLoading, error: trendingError } = useFetch(TRENDING);
  const { shareData: topRated, loading: topRatedLoading, error: topRatedError } = useFetch(TOP_RATED);
  const { shareData: upComing, loading: upComingLoading, error: upComingError } = useFetch(UPCOMING);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || popularLoading || trendingLoading || topRatedLoading || upComingLoading) return <Spinner/>;

  if (popularError || trendingError || topRatedError || upComingError) {
    return <div>Error: Failed to fetch data.</div>;
  }

  const movieData = [
    { title: MOVIE_LISTS[0], moviesList: movies },
    { title: MOVIE_LISTS[1], moviesList: trending },
    { title: MOVIE_LISTS[2], moviesList: topRated },
    { title: MOVIE_LISTS[3], moviesList: popular },
    { title: MOVIE_LISTS[4], moviesList: upComing },
  ];

  return (
    <div className="relative z-20 -mt-52">
      {movieData.map((movie, index) => (
        <MoviesCarousel
          key={index}
          title={movie.title}
          moviesList={movie.moviesList}
        />
      ))}
    </div>
  );
};

export default SecondaryContainer;
