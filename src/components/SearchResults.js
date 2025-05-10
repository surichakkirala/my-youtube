import React, { useEffect, useState } from "react";
import { PAGE_SIZE, YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import SearchResultsVideoCard from "./SearchResultsVideoCard";
import Pagination from "./Pagination";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const searchQuery = searchParams?.get("search_query");

  useEffect(() => {
    getSearchedVideos();
  }, [searchQuery]);
  const totalResults = videos.length;
  const numOfPages = Math.ceil(totalResults / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageNumber = (num) => {
    setCurrentPage(num);
  };
  const goToPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const goToNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const getSearchedVideos = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    const filterVideos = json.items.filter((video) => {
      return video.id.kind === "youtube#video";
    });
    setVideos(filterVideos);
  };
  if (videos.length === 0) return;
  return (
    <div className="flex flex-col justify-center w-fit">
      {videos.slice(start, end).map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <SearchResultsVideoCard videoInfo={video} />
        </Link>
      ))}
      <Pagination
        currentPage={currentPage}
        numOfPages={numOfPages}
        handlePageNumber={handlePageNumber}
        goToNext={goToNext}
        goToPrev={goToPrev}
      />
    </div>
  );
};

export default SearchResults;
