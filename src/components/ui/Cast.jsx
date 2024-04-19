import React, { useState } from "react";
import CastDialog from "./CastDialog";
import { CAST } from "../../utils/constants";
import { Button } from "@material-tailwind/react";

const Cast = ({ id }) => {
  const [dialog, setDialog] = useState({ value: null, id: null });
  const handleOpen = (value, id) => setDialog({ value: value, id: id });

  return (
    <>
        <Button
          variant="text"
          color="white"
          onClick={() => handleOpen("xl", id)}
          className="z-10 ml-4 bg-black cursor-pointer "
        >
          <span>{CAST}</span>
        </Button>
      <CastDialog id={id} dialog={dialog} handleOpen={handleOpen} />
    </>
  );
};

export default Cast;
