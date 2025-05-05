import React from "react";
import { viewCount } from "../utils/helper";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="md:p-2 md:m-2 md:w-72">
      <img
        className="rounded-lg w-screen p-1 md:p-0"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className=" p-1 md:p-0 font-bold">
          {title.length > 60 ? title.slice(0, 55) + "..." : title.slice(0, 58)}
        </li>
        <li className="p-1 md:p-0 ">
          {viewCount(statistics?.viewCount)} views
        </li>
        <li className="p-1 md:p-0 ">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
