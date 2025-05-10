import moment from "moment/moment";
import React from "react";

const SearchResultsVideoCard = ({ videoInfo }) => {
  const { snippet } = videoInfo;
  const { channelTitle, title, thumbnails, publishedAt, description } = snippet;

  return (
    <div className="flex flex-col md:flex-row p-1 mb-3 space-y-4 my-3 md:h-48 rounded-lg">
      <img
        className="rounded-xl p-1 md:p-0"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="font-semibold m-2 px-4 md:space-y-4 space-y-1">
        <h2>{title}</h2>
        <p className="text-xs">{channelTitle}</p>
        <div className="flex items-center text-xs text-gray-600 gap-1">
          <p>{moment(publishedAt).fromNow()}</p>
        </div>
        <p className="text-sm text-gray-500 font-normal">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultsVideoCard;
