import React from "react";
import { HOME_IMG } from "../../utils/constants";
const BgImage = () => {
  return (
    <img
      className="absolute object-cover object-center w-full h-full"
      src={HOME_IMG}
      alt={HOME_IMG}
    />
  );
};

export default BgImage;
