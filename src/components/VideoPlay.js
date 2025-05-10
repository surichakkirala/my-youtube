import { useEffect, useState } from "react";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoInfoComponent from "./VideoInfoComponent";

const VideoPlay = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  useEffect(() => {
    getVideoInfo();
  }, []);
  const getVideoInfo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + videoId);
    const json = await data.json();
    setVideoInfo(json.items[0]);
  };
  if (videoInfo.length === 0) return;
  return (
    <div>
      <div className="flex flex-col">
        <div className="p-1">
          <iframe
            className="md:h-[30rem] h-60 w-full md:rounded-lg"
            src={
              "https://www.youtube.com/embed/" + videoId + "?&autoplay=1&mute=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <VideoInfoComponent info={videoInfo} />
        </div>
        <CommentsContainer videoId={videoId} />
      </div>
    </div>
  );
};

export default VideoPlay;
