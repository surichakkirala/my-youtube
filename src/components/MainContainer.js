import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" my-4 flex flex-col">
      <div className="hidden md:flex">
        <ButtonsList />
      </div>
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
