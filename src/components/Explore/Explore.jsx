import React, { useState } from "react";
import { genresList } from "../../utils/constants";
import {
  Button,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import useGenres from "../../hooks/useGenres";
import MovieCard from "../ui/MovieCard";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { getItemProps, next, prev } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import ExploreHeader from "./ExploreHeader";
import { setActivePage } from "../../utils/Store/Slices/activePage";

const Explore = () => {
  const activePage = useSelector((store) => store.activePage?.active);
  const dispatch = useDispatch();
  const [genreID, setGenreID] = useState(35); //add to redux manage all states and make seprate file for redux function and seprate for helpers(it is already their)
  const { genreBasedMovies, loading, error } = useGenres(genreID, activePage);

  const getGenreID = (id) => {
    setGenreID(id);
  };

  const handleResetActivePage = () => { //this type of helper
    dispatch(setActivePage(1));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <ExploreHeader getGenreID={getGenreID}/>
      <section className="flex-wrap items-center justify-center hidden w-full gap-5 p-8 md:flex">
        {genresList.map((genre) => (
          <Button
            key={genre.id}
            onClick={() => {getGenreID(genre.id); handleResetActivePage()}}
            color="white"
            className="rounded-full"
            size="md"
            variant="outlined"
          >
            {genre.name}
          </Button>
        ))}
      </section>
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
          <p>No movies found</p>
        )}
      </section>
      <div className="flex flex-col items-center gap-4 p-3 md:flex-row md:items-center md:p-9">
        <Button
          variant="text"
          className="flex items-center gap-2 text-white cursor-pointer"
          onClick={() => prev(activePage, dispatch)}
          disabled={activePage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="w-4 h-4" /> Previous
        </Button>
        <div className="flex items-center gap-2 overflow-x-auto">
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <IconButton
              key={pageNumber}
              className="text-white"
              {...getItemProps(pageNumber, activePage, dispatch)}
            >
              {pageNumber}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 text-white"
          onClick={() => next(activePage, dispatch)}
          disabled={activePage === 5}
        >
          Next <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Explore;
