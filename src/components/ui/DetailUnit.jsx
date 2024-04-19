import React from "react";

const DetailUnit = ({ name, work }) => {
  return (
    <div>
      <p className="text-gray-500 dark:text-gray-400">{name}</p>
      <p>{work}</p>
    </div>
  );
};

export default DetailUnit;
