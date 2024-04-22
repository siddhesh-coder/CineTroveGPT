import React, { useState } from "react";
import { IMG_PATH } from "../../utils/constants";
import Details from "../Browse/Details";

const MovieCard = ({ movieImgKey, movieTitle, id, styles }) => {
  const [dialog, setDialog] = useState({ value: null, id: null });
  const handleOpen = (value, id) => setDialog({ value: value, id: id });

  return (
    // fix spinner css
    <div>
      <div
        className={styles}
        onClick={() => handleOpen("xxl", id)}
        variant="gradient"
      >
        <img
          className="w-full h-auto"
          src={IMG_PATH + movieImgKey}
          alt={movieTitle}
          loading="lazy"
        />    
      </div>
      {dialog.value && <Details dialog={dialog} handleOpen={handleOpen} />}
    </div>
  );
};

export default MovieCard;
