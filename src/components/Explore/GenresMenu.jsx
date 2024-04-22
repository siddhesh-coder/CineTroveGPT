import React from "react";
import useActions from "../../hooks/useActions";
import { Button } from "@material-tailwind/react";
import { genresList } from "../../utils/constants";

const GenresMenu = () => {
  const { handleResetActivePage, getGenreID } = useActions();

  return (
    <section className="flex-wrap items-center justify-center hidden w-full gap-5 p-8 md:flex">
      {genresList.map((genre) => (
        <Button
          key={genre.id}
          onClick={() => {
            getGenreID(genre.id);
            handleResetActivePage();
          }}
          color="white"
          className="rounded-full"
          size="md"
          variant="outlined"
        >
          {genre.name}
        </Button>
      ))}
    </section>
  );
};

export default GenresMenu;
