import React from "react";
import { Dialog, DialogBody, Spinner } from "@material-tailwind/react";
import useCredits from "../../hooks/useCredits";
import CastHeader from "./CastHeader";
import CastList from "./CastList";

const CastDialog = ({ id, handleOpen, dialog }) => {
  const { credits, loading, error } = useCredits(id);
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Dialog
      open={dialog.value === "xl"}
      size={dialog.value || "md"}
      onClose={handleOpen}
      className="bg-black"
    >
      <DialogBody className="w-full py-5 md:py-24 lg:py-8">
        <div className="container px-4 md:px-6">
          <CastHeader handleOpen={handleOpen} />
          <CastList credits={credits} />
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default CastDialog;
