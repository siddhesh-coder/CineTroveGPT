import React from "react";
import LOGO from "../../assets/logo.png";
import { AlignJustify } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleSearchGPT } from "../../utils/Store/Slices/searchToggle";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import useNotify from "../../hooks/useNotify";
import { Link, useNavigate } from "react-router-dom";
import {
  AUTH_BUTTON,
  ERROR_MSG,
  ERROR_STATUS,
  MOVIEGPT,
  SUCCESS_SIGN_OUT,
  SUCCESS_STATUS,
} from "../../utils/constants";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const BrowseHeader = () => {
  const dispatch = useDispatch();
  const notify = useNotify();
  const navigate = useNavigate();

  const handleOpenSearch = () => {
    dispatch(toggleSearchGPT(true));
  };

  const user = auth.currentUser || null;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        notify(SUCCESS_STATUS, SUCCESS_SIGN_OUT);
        navigate("/");
      })
      .catch((error) => {
        notify(ERROR_STATUS, ERROR_MSG);
      });
  };

  return (
    <header className="absolute z-50 flex items-center justify-between w-screen px-6 py-4 text-white lg:px-1 bg-gradient-to-b from-black to-custom-gradient">
      <img className="w-36 lg:ml-10 md:w-40 lg:w-44" src={LOGO} alt={LOGO} />
      <div className="items-center justify-center hidden gap-5 mx-11 sm:flex">
        <Button><Link to={"/explore"}>Explore More</Link></Button>
        <Button onClick={handleOpenSearch}>{MOVIEGPT}</Button>
        <Button onClick={user !== null ? handleSignOut : undefined}>
          {user !== null ? AUTH_BUTTON[1] : AUTH_BUTTON[0]}
        </Button>
      </div>
      <div className="sm:hidden">
        <Menu>
          <MenuHandler>
            <AlignJustify className="text-white" />
          </MenuHandler>
          <MenuList className="bg-black">
            <MenuItem onClick={handleOpenSearch} className="text-white">
              {MOVIEGPT}
            </MenuItem>
            <MenuItem
              onClick={user !== null ? handleSignOut : undefined}
              className="text-white"
            >
              {user !== null ? AUTH_BUTTON[1] : AUTH_BUTTON[0]}
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default BrowseHeader;