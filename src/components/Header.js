import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/appSlice";
import {
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { cacheResults } from "../slices/searchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchComponent from "./SearchComponent";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <>
      {!showSearch && (
        <div className="flex flex-wrap  justify-between md:grid-flow-col md:grid items-center p-5 m-2 border-b-2 shadow-sm md:shadow-none">
          <div className="flex  md:col-span-3">
            <button onClick={() => toggleMenuHandler()}>
              <GiHamburgerMenu className="hidden md:flex md:w-6 md:h-8 cursor-pointer" />
            </button>
            <a href="/">
              <img className="h-8 mx-2" alt="logo" src={YOUTUBE_LOGO} />
            </a>
          </div>
          <div className="hidden md:block col-span-8 px-10">
            <SearchComponent
              showSearch={showSearch}
              setShowSearch={setShowSearch}
              setSearchQuery={setSearchQuery}
              suggestions={suggestions}
            />
          </div>
          <div className=" flex space-x-2 mr-2 md:mr-4 text-xl md:col-span-1">
            <AiOutlineSearch
              className="md:hidden"
              onClick={() => setShowSearch(!showSearch)}
            />
            <FaUserCircle className=" text-xl md:text-4xl" />
          </div>
        </div>
      )}
      {showSearch && (
        <SearchComponent
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setSearchQuery={setSearchQuery}
          suggestions={suggestions}
        />
      )}
    </>
  );
};

export default Header;
