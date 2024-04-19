import React from 'react';
import CastInfo from "./CastInfo";

const CastList = ({credits}) => {
  return (
    <div className="grid overflow-y-auto max-h-[500px] gap-5 mt-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {credits &&
      credits?.cast.map((person) => (
        <CastInfo
          key={person?.id}
          imgLink={person?.profile_path}
          name={person?.name}
          character={person?.character}
        />
      ))}
  </div>
  )
}

export default CastList