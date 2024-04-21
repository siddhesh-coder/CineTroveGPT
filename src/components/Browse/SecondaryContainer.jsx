import React from "react";
import MoviesCarousel from "../ui/MoviesCarousel";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { getMoviesDataObject } from "../../utils/helper";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.moviesList);

  if (!movies || Object.values(movies).some((list) => !list)) {
    return <Spinner />;
  }
  
  const moviesData = getMoviesDataObject(movies);

  return (
    <div className="relative z-20 -mt-52">
      {moviesData.map((movie, index) => (
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
