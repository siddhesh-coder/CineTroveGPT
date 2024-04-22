import { Button } from "@material-tailwind/react";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { PREV, pageSetting } from "../../utils/constants";
import { useSelector } from "react-redux";
import useActions from "../../hooks/useActions";

const PrevButton = () => {
  const { prev } = useActions();
  const activePage = useSelector((store) => store.activePage?.active);
  const { disabledStartPage, strokeWidthValue } = pageSetting;
  return (
    <Button
      variant="text"
      className="flex items-center gap-2 text-white cursor-pointer"
      onClick={() => prev(activePage)}
      disabled={activePage === disabledStartPage}
    >
      <ArrowLeftIcon strokeWidth={strokeWidthValue} className="w-4 h-4" />{" "}
      {PREV}
    </Button>
  );
};

export default PrevButton;
