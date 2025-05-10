import { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { formatCount } from "../utils/helper";
import moment from "moment/moment";

const VideoInfoComponent = ({ info }) => {
  const [showDescription, setShowDescription] = useState(false);
  const {
    snippet: { channelTitle, title, description, publishedAt },
    statistics: { viewCount, likeCount },
  } = info;
  const truncatedDescription = showDescription
    ? description
    : `${description.substring(0, 200)}...`;
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const buttonText = showDescription ? "less" : "more";
  return (
    <div className="mt-2 m-2">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="flex flex-row mt-3 items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-5 md:p-7 h-2"></div>
          <div className="ml-2">
            <h2 className="font-semibold text-sm md:text-base">
              {channelTitle}
            </h2>
          </div>
        </div>
        <div className="flex">
          <div className="p-3  bg-gray-100 shadow-lg rounded-l-full ">
            <div className="flex items-center">
              <AiOutlineLike className="w-10 h-6" />
              <span className="font-semibold">{formatCount(likeCount)}</span>
            </div>
          </div>
          <div className="p-3  bg-gray-100 shadow-lg rounded-r-full ">
            <div className="flex items-center">
              <AiOutlineDislike className="w-10 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-2 mt-2">
        <div className="flex flex-col">
          <p className="font-semibold text-sm md:text-base">
            {formatCount(viewCount)} views &nbsp;{" "}
            {moment(publishedAt).fromNow()}
          </p>
          <p className="text-sm md:text-base">
            {truncatedDescription}
            {showDescription && <br />}
            <button className="font-semibold" onClick={toggleDescription}>
              Show {buttonText}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoInfoComponent;
