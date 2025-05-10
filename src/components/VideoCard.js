import React from "react";
import { formatCount } from "../utils/helper";
import moment from "moment/moment";
import { RxDotFilled } from "react-icons/rx";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="md:p-2 md:m-2 md:w-72">
      <img
        className="rounded-lg w-screen p-1 md:p-0"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="font-semibold m-2 space-y-2">
        <h2>
          {title.length > 60 ? title.slice(0, 55) + "..." : title.slice(0, 58)}
        </h2>
        <p className="text-xs">{channelTitle}</p>
        <div className="flex items-center text-xs text-gray-600 gap-1">
          <p>{formatCount(statistics?.viewCount)} views</p> <RxDotFilled />
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
