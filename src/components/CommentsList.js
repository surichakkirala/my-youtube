import React from "react";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comments data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
