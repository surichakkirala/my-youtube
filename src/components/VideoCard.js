import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = () => {
    if (statistics?.viewCount > 1000000) {
      return (
        (statistics?.viewCount / 100000).toFixed(1).replace(/\.0*$/, "") + "M"
      );
    } else if (statistics?.viewCount > 1000) {
      return (
        (statistics?.viewCount / 1000).toFixed(1).replace(/\.0*$/, "") + "K"
      );
    } else {
      return statistics?.viewCount;
    }
  };
  return (
    <div className="md:p-2 md:m-2 w-screen md:w-72">
      <img
        className="rounded-lg w-screen p-1 md:p-0"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className=" p-1 md:p-0 font-bold">
          {title.length > 60 ? title.slice(0, 55) + "..." : title.slice(0, 58)}
        </li>
        <li className="p-1 md:p-0 ">{viewCount()} views</li>
        <li className="p-1 md:p-0 ">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
