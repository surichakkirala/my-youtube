import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SearchResultsVideoCard from "./SearchResultsVideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const searchQuery = searchParams?.get("search_query");

  useEffect(() => {
    getSearchedVideos();
  }, [searchQuery]);

  const getSearchedVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    const filterVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    setVideos(filterVideos);
  };
  return (
    <div className="flex flex-col justify-center w-fit">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
          <SearchResultsVideoCard key={video.id} videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
