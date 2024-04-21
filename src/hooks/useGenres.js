import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useGenres = (id, active) => {
  const [genreBasedMovies, setGenreBasedMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?language=en-US&page=${active}&sort_by=popularity.desc&with_genres=${id}`,
          options
        );
        setGenreBasedMovies(response.data);
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
  }, [id, active]);

  return { genreBasedMovies, loading, error };
};

export default useGenres;
