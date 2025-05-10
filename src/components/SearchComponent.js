import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const SearchComponent = ({
  showSearch,
  setShowSearch,
  setSearchQuery,
  suggestions,
}) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const searchBoxRef = useRef(null);
  useEffect(() => {
    const ac = new AbortController();
    const handleClickOutside = (e) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(e.target)) {
        setIsSearchBarOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside, ac);
    return () => {
      ac.abort();
    };
  }, [searchBoxRef]);

  return (
    <div className="my-3 md:my-0">
      <div className="flex items-center shadow-lg md:shadow-none">
        <BiArrowBack
          className=" ml-1 md:hidden"
          onClick={() => setShowSearch(!showSearch)}
        />
        <input
          ref={searchBoxRef}
          className="bg-gray-100 outline-blue-300 md:bg-white w-full md:w-1/2 md:border border-gray-300  m-1 md:m-0 p-2 md:px-4 rounded-full  md:rounded-r-none"
          type="text"
          placeholder="Search..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`results/?search_query=${e.target.value}`);
            }
          }}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsSearchBarOpen(true);
            setQuery(e.target.value);
          }}
          value={query}
          onFocus={() => setIsSearchBarOpen(true)}
        />
        <button className=" hidden md:block bg-gray-100 border border-gray-500  px-3 py-3 rounded-r-full text-center">
          <GoSearch />
        </button>
      </div>
      {isSearchBarOpen && suggestions.length > 0 && (
        <div
          ref={searchBoxRef}
          className="absolute w-screen mr-2  md:w-4/12 bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100"
        >
          <ul>
            {suggestions.map((suggestion) => (
              <li
                className="px-2 hover:bg-gray-100"
                key={suggestion}
                onClick={() => {
                  setIsSearchBarOpen(false);
                  setQuery(suggestion);
                }}
              >
                <Link
                  className="flex items-center gap-2"
                  to={"results/?search_query=" + suggestion}
                >
                  <IoSearchOutline />
                  {suggestion}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
