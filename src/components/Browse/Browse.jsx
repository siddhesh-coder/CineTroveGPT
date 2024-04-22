import React from "react";
import BrowseHeader from "./BrowseHeader";
import { NOW_PLAYING, POPULAR, TOP_RATED, TRENDING, UPCOMING } from "../../utils/constants";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchAll from "../../hooks/useFetchAll";
import { Spinner } from "@material-tailwind/react";
import useActions from "../../hooks/useActions";

const Browse = () => {
  const { shareData, loading, error } = useFetchAll([
    NOW_PLAYING,
    POPULAR,
    TRENDING,
    TOP_RATED,
    UPCOMING,
  ]);

  useActions(shareData);

  if (loading) return <div className="fixed inset-0 flex items-center justify-center h-screen bg-black opacity-50"><Spinner color="black"/></div>;
  
  if (error) return <div>Error</div>;

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-black">
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
