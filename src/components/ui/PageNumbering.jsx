import React from "react";
import useActions from "../../hooks/useActions";
import { IconButton } from "@material-tailwind/react";
import { PageArray } from "../../utils/constants";
import { useSelector } from "react-redux";

const PageNumbering = () => {
  const { getItemProps } = useActions();
  const activePage = useSelector((store) => store.activePage?.active);
  return (
    <div className="flex items-center gap-2 overflow-x-auto">
      {PageArray.map((pageNumber) => (
        <IconButton
          key={pageNumber}
          className="text-white"
          {...getItemProps(pageNumber, activePage)}
        >
          {pageNumber}
        </IconButton>
      ))}
    </div>
  );
};

export default PageNumbering;
