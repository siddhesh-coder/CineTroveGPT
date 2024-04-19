import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useImages = (id) => {
  const [imgs, setImgs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/images`,
          options
        );
        setImgs(response.data);
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

  return { imgs, loading, error };
};

export default useImages;
