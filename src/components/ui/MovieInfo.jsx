import React from "react";
import useCredits from "../../hooks/useCredits";
import { getDirecting, getGenres } from "../../utils/helper";
import { Spinner } from "@material-tailwind/react";
import { IMG_PATH, OUTOFF } from "../../utils/constants";
import DetailUnit from "./DetailUnit";

const MovieInfo = ({ img, reviews, genres, lang, id }) => {
  const { credits, loading, error } = useCredits(id);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error</div>;
  }

  const data = [
    { name: "Director", work: getDirecting(credits?.crew) },
    { name: "Rating", work: Math.floor(reviews) + OUTOFF },
    { name: "Genres", work: getGenres(genres) },
    { name: "Language", work: lang[0]?.name },
  ];

  return (
    <div className="container px-4 mx-auto mt-8 lg:px-0">
      <div className="grid gap-4 lg:grid-cols-[1fr,500px] xl:grid-cols-[1fr,550px]">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:flex-row lg:justify-start lg:gap-10">
          <div className="w-40 md:w-auto lg:w-auto">
            <img
              className="lg:h-56 lg:w-52 md:h-56 md:w-52 sm:w-14 sm:h-20"
              src={IMG_PATH + img}
              alt={img}
            />
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              {data.map((item, index) => (
                <DetailUnit key={index} name={item?.name} work={item?.work} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
