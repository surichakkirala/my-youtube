import React from "react";
import { commentsData } from "../utils/mockData/CommentsData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
