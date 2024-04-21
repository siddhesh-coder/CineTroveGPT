import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { getTitle } from "../../utils/helper";
import { settings } from "../../utils/constants";

const MoviesCarousel = ({ title, moviesList }) => {
  const headerTitle = getTitle(title);

  return (
    <div className="mx-8 mt-4">
      <h1 className="mb-4 ml-4 text-2xl font-bold text-white md:text-3xl lg:text-xl">
        {headerTitle}
      </h1>
      <Slider {...settings}>
        {moviesList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieImgKey={movie.poster_path}
              movieTitle={movie.title}
              styles={"relative m-4 overflow-hidden rounded shadow-lg cursor-pointer max-w-48"}
            />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
