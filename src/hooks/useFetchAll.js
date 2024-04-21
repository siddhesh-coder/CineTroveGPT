import axios from "axios";
import { options } from "../utils/constants";
import { useState, useEffect } from "react";

const useFetchAll = (apiUrls) => {
  const [shareData, setShareData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = apiUrls.map((apiUrl) => axios.get(apiUrl, options));
        const responses = await Promise.all(requests);
        const responseData = responses.map((response) => response.data.results);

        setShareData(responseData);
        setError(null);

      } catch (error) {
        setError(error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { shareData, loading, error };
};

export default useFetchAll;
