import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const MoviesCarousel = ({ title, moviesList }) => {
  
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2 focus:outline-none"
        onClick={onClick}
      >
        <ChevronLeftIcon className="text-white w-9 h-9" />
      </button>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2 focus:outline-none"
        onClick={onClick}
      >
        <ChevronRightIcon className="text-white w-9 h-9" />
      </button>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="mx-8 mt-4">
      <h1 className="mb-4 ml-4 text-2xl font-bold text-white md:text-3xl lg:text-xl">
        {title}
      </h1>
      <Slider {...settings}>
        {moviesList.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              movieImgKey={movie.poster_path}
              movieTitle={movie.title}
            />
        ))}
      </Slider>
    </div>
  );
};

export default MoviesCarousel;
