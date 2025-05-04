import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../slices/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { USER_IMG_URL } from "../utils/constants";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="md:h-[30rem] gap-5 h-60  ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chatMessage, index) => (
          <ChatMessage
            key={index}
            name={chatMessage.name}
            message={chatMessage.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "User",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <div className=" flex w-full p-2 ml-2 gap-4 rounded-xl border-t-0 border border-black items-center">
          <img className="h-8" alt="user" src={USER_IMG_URL} />
          <input
            className="w-full outline-none border-b-2 border-blue-100"
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Chat Something..."
          />
          <button type="submit">
            <AiOutlineSend className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
