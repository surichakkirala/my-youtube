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
    <div className="p-2 m-2 w-72 overflow-hidden">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">
          {title.length > 60 ? title.slice(0, 55) + "..." : title.slice(0, 58)}
        </li>
        <li>{viewCount()} views</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
