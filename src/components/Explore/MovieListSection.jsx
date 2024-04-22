import React from "react";
import useGenres from "../../hooks/useGenres";
import MovieCard from "../ui/MovieCard";
import { NO_MOVIES_FOUND } from "../../utils/constants";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

const MovieListSection = () => {
  const activePage = useSelector((store) => store.activePage?.active);
  const genreID = useSelector((store) => store.genreID?.genreID);
  const { genreBasedMovies, loading, error } = useGenres(genreID, activePage);
  
  return (
    <section className="flex flex-wrap items-center justify-center lg:justify-start md:gap-4 md:px-8 lg:gap-5 lg:px-8">
      {loading ? (
        <Spinner />
      ) : genreBasedMovies && genreBasedMovies.results ? (
        genreBasedMovies.results.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            movieImgKey={movie.poster_path}
            movieTitle={movie.title}
            styles="relative m-4 max-w-32 overflow-hidden rounded shadow-lg cursor-pointer md:max-w-48"
          />
        ))
      ) : (
        <p>{NO_MOVIES_FOUND}</p>
      )}
    </section>
  );
};

export default MovieListSection;
