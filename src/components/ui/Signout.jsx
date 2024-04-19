import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import useNotify from "../../hooks/useNotify";
import { useNavigate } from "react-router-dom";
import { AUTH_BUTTON } from "../../utils/constants";

const Signout = () => {
  const notify = useNotify();
  const navigate = useNavigate();
  const user = auth.currentUser || null;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        notify("success", "Sign out successful");
        navigate("/");
      })
      .catch((error) => {
        notify("error", "An error happened");
      });
  };
  return (
    <Link
      onClick={user !== null ? handleSignOut : undefined}
      className="relative inline-flex items-center justify-center p-4 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-lg shadow-xl lg:mr-20 group hover:ring-1 hover:ring-purple-500"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white">
        {user !== null ? AUTH_BUTTON[1] : AUTH_BUTTON[0]}
      </span>
    </Link>
  );
};

export default Signout;
