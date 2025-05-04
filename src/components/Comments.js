import React from "react";
import { USER_IMG_URL } from "../utils/constants";

const Comments = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="p-2 my-2 flex shadow-sm bg-gray-100 rounded-lg">
      <img className="w-8 h-8" alt="user" src={USER_IMG_URL} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
