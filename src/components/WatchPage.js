import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../slices/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import VideoPlay from "./VideoPlay";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="md:flex md:flex-wrap md:justify-center md:w-full mt-4">
      <div className=" md:w-3/5 md:mr-2">
        <VideoPlay videoId={videoId} />
      </div>
      <div className="w-1/3 hidden md:block h-[30rem]">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
