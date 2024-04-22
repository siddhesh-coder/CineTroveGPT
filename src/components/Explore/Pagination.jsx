import React from "react";
import NextButton from "../ui/NextButton";
import PrevButton from "../ui/PrevButton";
import PageNumbering from "../ui/PageNumbering";

const Pagination = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-3 md:flex-row md:items-center md:p-9">
      <PrevButton/>
      <PageNumbering/>
      <NextButton/>
    </div>
  );
};

export default Pagination;
