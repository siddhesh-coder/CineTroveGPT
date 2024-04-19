import React from "react";

const ErrorMsg = ({ errorMsg }) => {
  return <p className="text-sm font-semibold text-red-600">{errorMsg}</p>;
};

export default ErrorMsg;
