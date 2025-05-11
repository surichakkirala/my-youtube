import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="hidden md:flex ">
          <SideBar></SideBar>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
