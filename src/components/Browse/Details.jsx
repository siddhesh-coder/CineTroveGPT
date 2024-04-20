import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogFooter,
  Spinner,
} from "@material-tailwind/react";
import useDetails from "../../hooks/useDetails";
import useVideo from "../../hooks/useVideo";
import { giveYearOfRelease } from "../../utils/helper";
import MovieInfo from "../ui/MovieInfo";
import VideoSection from "../ui/VideoSection";

const Details = ({ dialog, handleOpen }) => {
  const [videoID, setVideoID] = useState(null);

  const { value, id } = dialog;
  const {
    details,
    loading: detailsLoading,
    error: detailsError,
  } = useDetails(id);

  const { trailer, loading: videoLoading, error: videoError } = useVideo(id);

  useEffect(() => {
    if (trailer && trailer.key) {
      setVideoID(trailer.key);
    }
  }, [trailer]);

  if (detailsLoading || videoLoading) {
    return <div className="absolute top-1/2"><Spinner /></div>;
  }

  if (detailsError || videoError) {
    return <div>Error: Unable to load details or video</div>;
  }

  const {
    title,
    overview,
    genres,
    release_date,
    vote_average,
    spoken_languages,
    poster_path,
  } = details;

  const releaseDate = giveYearOfRelease(release_date);

  return (
    <Dialog
      open={value === "xxl"}
      size={value || "md"}
      onClose={handleOpen}
      className="bg-black"
    >
      <div className="max-h-full overflow-y-auto">
        <VideoSection
          releaseDate={releaseDate}
          genres={genres}
          overview={overview}
          title={title}
          id={id}
          videoID={videoID}
        />
        <MovieInfo
          img={poster_path}
          reviews={vote_average}
          genres={genres}
          lang={spoken_languages}
          id={id}
        />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </div>
    </Dialog>
  );
};

export default Details;
