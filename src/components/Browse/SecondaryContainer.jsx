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

const SecondaryContainer = () => {
  const { shareData: popular } = useFetch(POPULAR);
  const { shareData: trending } = useFetch(TRENDING);
  const { shareData: topRated } = useFetch(TOP_RATED);
  const { shareData: upComing } = useFetch(UPCOMING);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const movieData = [
    { title: MOVIE_LISTS[0], moviesList: movies },
    { title: MOVIE_LISTS[1], moviesList: trending },
    { title: MOVIE_LISTS[2], moviesList: topRated },
    { title: MOVIE_LISTS[3], moviesList: popular },
    { title: MOVIE_LISTS[4], moviesList: upComing },1
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
