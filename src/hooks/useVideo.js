import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useVideo = (id) => {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos`,
          options
        );
        setVideoData(response.data.results);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (videoData !== null) {
      const trailerVideo = videoData.find((video) => video.type === "Trailer");
      setTrailer(trailerVideo || null);
    }
  }, [videoData]);

  return { trailer, loading, error };
};

export default useVideo;
