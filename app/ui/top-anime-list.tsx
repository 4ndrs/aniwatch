"use client";

import { useGetTopAnimeInfiniteQuery } from "../lib/anilist-api";

const TopAnimeList = () => {
  const { data, isUninitialized, isFetching, error } =
    useGetTopAnimeInfiniteQuery();

  console.log(
    "data:",
    data,
    "is unitialized:",
    isUninitialized,
    "is fetching:",
    isFetching,
    "error:",
    error,
  );

  return <div>hellowo</div>;
};

export default TopAnimeList;
