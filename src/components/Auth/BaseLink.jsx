import React from "react";

const BaseLink = ({
  baseTitle,
  baseLinkName,
  setActiveSignIn,
  activeSignIn,
}) => {
  return (
    <p className="text-base font-normal text-white">
      {baseTitle}{" "}
      <button
        type="button"
        className="underline"
        onClick={() => setActiveSignIn(!activeSignIn)}
      >
        {baseLinkName}
      </button>
    </p>
  );
};

export default BaseLink;
