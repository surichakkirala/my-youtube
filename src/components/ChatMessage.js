import React from "react";
import { USER_IMG_URL } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img className="h-8" alt="user" src={USER_IMG_URL} />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
