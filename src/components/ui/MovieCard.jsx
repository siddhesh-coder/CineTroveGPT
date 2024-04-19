import React from "react";
import { IMG_PATH } from "../../utils/constants";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const MovieCard = ({ movieImgKey, movieTitle, id }) => {
  const [size, setSize] = React.useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <>
      <div
        className="m-4 overflow-hidden rounded shadow-lg max-w-48"
        onClick={() => handleOpen("xxl")}
        variant="gradient"
      >
        <img
          className="w-full h-auto"
          src={IMG_PATH + movieImgKey}
          alt={movieTitle}
          loading="lazy"
        />
      </div>
      <Dialog open={size === "xxl"} size={size || "md"} handler={handleOpen} className="bg-black">
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default MovieCard;
