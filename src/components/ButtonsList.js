import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Movies",
  "News",
  "Songs",
  "Live",
  "Gaming",
  "Sports",
  "Cooking",
  "Recently uploaded",
];
const ButtonsList = () => {
  return (
    <div className="flex">
      {buttonList.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonsList;
