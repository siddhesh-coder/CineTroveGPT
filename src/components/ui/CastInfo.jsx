import React from "react";
import Avatar from "react-avatar";
import { IMG_PATH } from "../../utils/constants";

const CastInfo = ({imgLink, name, character}) => {
  return (
    <div className="flex items-center gap-4">
      <Avatar size={50} round="50px" src={IMG_PATH+imgLink}/>
      <div>
        <div className="text-base font-medium">{name}</div>
        <div className="text-sm text-gray-400">{character}</div>
      </div>
    </div>
  );
};

export default CastInfo;
