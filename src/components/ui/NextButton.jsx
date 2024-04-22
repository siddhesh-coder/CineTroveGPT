import { Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { NEXT, pageSetting } from "../../utils/constants";
import useActions from "../../hooks/useActions";
import { useSelector } from "react-redux";

const NextButton = () => {
  const { next } = useActions();
  const activePage = useSelector((store) => store.activePage?.active);
  const { disabledEndPage, strokeWidthValue } = pageSetting;
  return (
    <Button
      variant="text"
      className="flex items-center gap-2 text-white"
      onClick={() => next(activePage)}
      disabled={activePage === disabledEndPage}
    >
      {NEXT}{" "}
      <ArrowRightIcon strokeWidth={strokeWidthValue} className="w-4 h-4" />
    </Button>
  );
};

export default NextButton;
