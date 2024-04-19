import React from 'react';
import { useParams } from 'react-router-dom';


const Details = () => {
    const movieId = useParams();
  return (
    <div>Details: {movieId}</div>
  )
}

export default Details