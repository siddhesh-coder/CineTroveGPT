import React from "react";
import ExploreHeader from "./ExploreHeader";
import Pagination from "./Pagination";
import MovieListSection from "./MovieListSection";
import GenresMenu from "./GenresMenu";

const Explore = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <ExploreHeader/>
      <GenresMenu/>
      <MovieListSection/>
      <Pagination/>
    </div>
  );
};

export default Explore;
