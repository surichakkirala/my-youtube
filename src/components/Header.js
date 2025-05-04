import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/appSlice";
import {
  USER_IMG_URL,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { cacheResults } from "../slices/searchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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
    <div className="grid grid-flow-col items-center p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="w-6 h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-600 p-2 px-4 rounded-l-full"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-100 border border-gray-500  px-3 py-3 rounded-r-full text-center">
            <GoSearch />
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed w-4/12 bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li className="px-2 hover:bg-gray-100" key={suggestion}>
                  <div className="flex items-center gap-2">
                    <IoSearchOutline />
                    {suggestion}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={USER_IMG_URL} />
      </div>
    </div>
  );
};

export default Header;
