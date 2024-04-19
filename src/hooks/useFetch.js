import axios from "axios";
import { options } from "../utils/constants";
import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  const [shareData, setShareData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, options);
        setShareData(response.data.results);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { shareData, loading, error };
};

export default useFetch;
