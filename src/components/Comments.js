import React from "react";
import { USER_IMG_URL } from "../utils/constants";
import moment from "moment/moment";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { formatCount } from "../utils/helper";

const Comments = ({ commentData }) => {
  const { authorDisplayName, textDisplay, publishedAt, likeCount } =
    commentData?.snippet?.topLevelComment?.snippet;
  return (
    <div className="md:p-2 my-2 gap-2 flex overflow-x-scroll shadow-sm bg-gray-100 dark:bg-gray-900 dark:text-white rounded-lg">
      <img src={USER_IMG_URL} alt="userImage" className="rounded-full h-10" />
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h3>{authorDisplayName}</h3>
          <p className="text-xs text-gray-500">
            {moment(publishedAt).fromNow()}
          </p>
        </div>
        <span className="text-xs">{textDisplay}</span>
        <div className="flex gap-2 items-center">
          <AiOutlineLike />
          {formatCount(likeCount)}
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default Comments;
