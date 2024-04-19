import { ChevronRight } from "lucide-react";
import React from "react";

const LoginButton = ({ activeAuthState, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white transition-all duration-300 border border-transparent rounded-md shadow-lg gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800">
      <span className="text-lg font-bold">{activeAuthState}</span>
      <ChevronRight />
    </button>
  );
};

export default LoginButton;
