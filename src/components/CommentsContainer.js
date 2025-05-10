import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS_API } from "../utils/constants";
import Comments from "./Comments";

const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsData();
  }, [videoId]);
  const getCommentsData = async () => {
    const data = await fetch(YOUTUBE_COMMENTS_API + videoId);
    const json = await data.json();
    setComments(json.items);
  };
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-xl">Comments:</h1>
      {comments.map((comment) => (
        <Comments key={comment.id} commentData={comment} />
      ))}
    </div>
  );
};

export default CommentsContainer;
