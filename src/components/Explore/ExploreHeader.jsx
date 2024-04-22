import React from "react";
import { GENRES_HEADER, HOME, genresList } from "../../utils/constants";
import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Clapperboard } from "lucide-react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import useActions from "../../hooks/useActions";

const ExploreHeader = () => {
  const { handleResetActivePage, getGenreID } = useActions();

  return (
    <header className="flex items-center justify-between gap-4 p-4 sm:hidden">
      <Link to={"/browse"}>
        <img className="w-36 lg:ml-10 md:w-40 lg:w-44" src={LOGO} alt={LOGO} />
      </Link>
      <Menu>
        <MenuHandler>
          <Button className="flex items-center justify-between gap-2 text-white">
            <Clapperboard className="w-5" />
            {GENRES_HEADER}
          </Button>
        </MenuHandler>
        <MenuList className="overflow-y-scroll bg-black max-h-96">
          {genresList.map((genre) => (
            <MenuItem
              className="text-white"
              key={genre.id}
              onClick={() => {
                getGenreID(genre.id);
                handleResetActivePage();
              }}
            >
              {genre.name}
            </MenuItem>
          ))}
          <hr className="my-3" />
          <Link to={"/browse"}>
            <MenuItem className="font-semibold text-white">{HOME}</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </header>
  );
};

export default ExploreHeader;
