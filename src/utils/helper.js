import { setActivePage } from "./Store/Slices/activePage";
import { MOVIE_LISTS } from "./constants";

const truncateText = (details, maxLength) => {
  if (details.length <= maxLength) return details;
  const separationOfDetails = details.split(". ");
  const concatDetails = separationOfDetails.slice(0, 2).join(". ") + "...";
  return concatDetails;
};

const giveYearOfRelease = (date) => {
  const dateArr = date.split("-");
  return dateArr[0];
};

const getDirecting = (crew) => {
  const director = crew.find((person) => person?.department === "Directing");
  return director?.original_name;
};

const getGenres = (genres) => {
  return genres.map((genre) => genre?.name).join(", ");
};

const getMoviesDataObject = (movies) => {
  const moviesData = MOVIE_LISTS.map((category) => ({
    title: category,
    moviesList: movies[category],
  }));
  return moviesData;
};

const getTitle = (word) => {
  switch (word) {
    case "nowPlayingMovies":
      return "Now Playing";
    case "popularMovies":
      return "Popular";
    case "trendingMovies":
      return "Trending";
    case "topRatedMovies":
      return "Top Rated";
    case "upcomingMovies":
      return "Upcoming";
    default:
      return "";
  }
};

const next = (activePage, dispatch) => {
  if (activePage === 5) return;

  dispatch(setActivePage(activePage + 1));
};

const prev = (activePage, dispatch) => {
  if (activePage === 1) return;

  dispatch(setActivePage(activePage - 1));
};

const getItemProps = (index, activePage, dispatch) => ({
  variant: activePage === index ? "filled" : "text",
  color: "gray",
  onClick: () => dispatch(setActivePage(index)),
});

export {
  giveYearOfRelease,
  getDirecting,
  getGenres,
  getMoviesDataObject,
  getTitle,
  getItemProps,
  next,
  prev,
};

export default truncateText;
