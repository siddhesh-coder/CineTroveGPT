import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export const HOME_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";

const tmdbKey = process.env.REACT_APP_TMDB_KEY;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${tmdbKey}`,
  },
};

export const NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const TRENDING =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export const PLAY = "Play";

export const MORE_INFO = "More Info";

export const SEARCH = "Search";

export const SEARCH_PLACEHOLDER = "Search for a movies";

export const HOME_GET_STARTED = "Get Started";

export const videoConfig = {
  autoplay: 1,
  mute: 1,
  controls: 0,
  rel: 0,
  modestbranding: 1,
  showinfo: 0,
};

export const HOME_GREET = [
  "Unlimited movies, TV shows and more",
  "Now at Cheap price, watch today",
];

export const AUTH_BUTTON = ["Sign In", "Sign out"];

export const subscription = [
  {
    title: "PREMIUM",
    description:
      "A cinematic experience with the best picture and audio quality.",
    price: "₹649/month",
  },
  {
    title: "STANDARD",
    description: "All the entertainment you love, in Full HD video quality.",
    price: "₹499/month",
  },
  {
    title: "BASIC",
    description:
      "A great way to enjoy all your favorites shows and movies on a budget.",
    price: "₹199/month",
  },
  {
    title: "MOBILE",
    description: "A travel-friendly option for your mobile devices.",
    price: "₹149/month",
  },
];

export const PLAN_GREET = " A plan to suit your needs";

export const BUY = "Buy now";

export const LANGUAGE_OPTIONS = [
  { identifier: "english", lang: "English" },
  { identifier: "marathi", lang: "Marathi" },
  { identifier: "hindi", lang: "Hindi" },
  { identifier: "tamil", lang: "Tamil" },
  { identifier: "malayalam", lang: "Malayalam" },
];

export const LANGUAGE = [
  {
    identifier: "english",
    placeholder: "What would you like to watch today?",
    searchButton: "Search",
  },
  {
    identifier: "marathi",
    placeholder: "तुम्हाला आज काय बघायला आवडेल?",
    searchButton: "शोधा",
  },
  {
    identifier: "hindi",
    placeholder: "आज आप क्या देखना चाहेंगे?",
    searchButton: "खोज",
  },
  {
    identifier: "tamil",
    placeholder: "இன்று நீங்கள் எதைப் பார்க்க விரும்புகிறீர்கள்?",
    searchButton: "தேடு",
  },
  {
    identifier: "malayalam",
    placeholder: "ഇന്ന് നിങ്ങൾ എന്താണ് കാണാൻ ആഗ്രഹിക്കുന്നത്?",
    searchButton: "തിരയുക",
  },
];

export const OPTIONS = "Options";

export const CAST = "Show Cast";

export const CAST_HEADER = "Cast";

export const OUTOFF = "/10";

export const MOVIEGPT = "MovieGPT";

export const SUCCESS_SIGN_IN = "Sign In successful";
export const SUCCESS_SIGN_OUT = "Sign out successful";

export const ERROR_MSG = "An error happened";

export const SUCCESS_STATUS = "success";
export const ERROR_STATUS = "error";

export const MOVIE_LISTS = [
  "nowPlayingMovies",
  "popularMovies",
  "trendingMovies",
  "topRatedMovies",
  "upcomingMovies",
];

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

export const settings = {
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

export const genresList = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const HOME = "Home";

export const GENRES_HEADER = "Genres";

export const NO_MOVIES_FOUND = "No movies found";

export const PREV = "Previous";

export const NEXT = "next";

export const PageArray = [1, 2, 3, 4, 5];

export const pageSetting = {
  disabledStartPage: 1,
  disabledEndPage: 5,
  strokeWidthValue: 2
}