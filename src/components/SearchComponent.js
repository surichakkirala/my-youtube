import React, { useState } from "react";
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
  return (
    <div>
      <div className="flex">
        <BiArrowBack
          className="md:hidden"
          onClick={() => setShowSearch(!showSearch)}
        />
        <input
          className="w-1/2 border border-gray-600 p-2 px-4 rounded-l-full"
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
        <button className="bg-gray-100 border border-gray-500  px-3 py-3 rounded-r-full text-center">
          <GoSearch />
        </button>
      </div>
      {isSearchBarOpen && suggestions.length > 0 && (
        <div className="fixed w-4/12 bg-white py-2 px-2 shadow-lg rounded-lg border border-gray-100">
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
                  to={`results/?search_query=${suggestion}`}
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
