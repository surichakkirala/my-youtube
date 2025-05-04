import React from "react";
import { BiLike } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import {
  MdOutlineHistory,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const buttons = [
    {
      icon: <IoHome />,
      name: "Home",
      to: "/",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
      to: "/",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscriptions",
      to: "/",
    },
    {
      icon: <MdOutlineVideoLibrary />,
      name: "Library",
      to: "/",
    },
    {
      icon: <MdOutlineHistory />,
      name: "History",
      to: "/",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: "Watch Later",
      to: "/",
    },
    {
      icon: <BiLike />,
      name: "Liked Videos",
      to: "/",
    },
  ];
  const SideButtons = ({ icon, name }) => {
    return (
      <div className="flex w-full p-1 px-4 my-1 gap-2 items-center hover:bg-gray-100 rounded-lg">
        {icon}
        <span>{name}</span>
      </div>
    );
  };
  if (!isMenuOpen) return null;
  return (
    <div className="w-48 p-5 shadow-lg">
      {buttons.map((button, index) => (
        <Link key={index} to={button.to}>
          <SideButtons icon={button.icon} name={button.name} />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
