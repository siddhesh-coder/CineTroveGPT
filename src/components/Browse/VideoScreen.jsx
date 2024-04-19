import React from "react";
import useVideo from "../../hooks/useVideo";
import VideoPlayer from "./VideoPlayer";

const VideoScreen = ({ id }) => {
  const { trailer } = useVideo(id);
  const key = trailer?.key || "";
  return <VideoPlayer VideoKey={key} width={"screen"} height={"screen"} />;
};

export default VideoScreen;
