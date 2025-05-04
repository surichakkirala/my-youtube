import React from "react";
import CommentsContainer from "./CommentsContainer";

const VideoPlay = ({ videoId }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div>
          <iframe
            className="md:h-[30rem] h-60 w-full md:rounded-lg"
            src={
              "https://www.youtube.com/embed/" + videoId + "?&autoplay=1&mute=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default VideoPlay;
