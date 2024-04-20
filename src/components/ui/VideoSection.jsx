import React from "react";
import { DialogHeader, DialogBody } from "@material-tailwind/react";
import VideoPlayer from "../Browse/VideoPlayer";
import Cast from "../ui/Cast";
import { getGenres } from "../../utils/helper";

const VideoSection = ({ title, releaseDate, overview, id, genres, videoID }) => {
  const genre = getGenres(genres);
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 h-2/3 aspect-video">
      <VideoPlayer VideoKey={videoID} width={"full"} height={"auto"}/>
      <div className="absolute z-10 w-full h-48 bg-opacity-90 top-3/4 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-1 p-6 md:p-10 lg:p-16">
        <DialogHeader className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </DialogHeader>
        <span className="px-4 text-white">
          {releaseDate} &#x2022; <span>{genre}</span>
        </span>
        <DialogBody className="text-gray-400 max-w-[800px]">
          <div className="overflow-y-auto max-h-[400px]"> {overview}</div>
        </DialogBody>
        <Cast id={id} />
      </div>
    </section>
  );
};

export default VideoSection;
