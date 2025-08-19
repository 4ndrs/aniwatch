"use client";

import Link from "next/link";
import AnimeCard from "@/app/ui/anime-card";

import { useCallback, useMemo } from "react";
import { useGetTopAnimeInfiniteQuery } from "@/app/lib/anilist-api";

import type { TopAnimeQuery } from "@/app/gql/graphql";

const TopAnimeList = () => {
  const {
    data,
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isUninitialized,
  } = useGetTopAnimeInfiniteQuery();

  const topAnime = useMemo(
    () =>
      data?.pages.reduce(
        (acc, page) => {
          if (!page.Page?.media) {
            return acc;
          }

          return [...acc, ...page.Page.media];
        },
        [] as NonNullable<NonNullable<TopAnimeQuery["Page"]>["media"]>,
      ),
    [data],
  );

  const observeIntersection = useCallback(
    (ref: HTMLDivElement | null) => {
      if (!ref) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (
            !error &&
            !isFetching &&
            hasNextPage &&
            entries[0].isIntersecting
          ) {
            fetchNextPage();
          }
        },
        {
          rootMargin: "100px",
        },
      );

      observer.observe(ref);

      return () => observer.disconnect();
    },
    [fetchNextPage, hasNextPage, isFetching, error],
  );

  return (
    <>
      {topAnime?.map((anime) => (
        <Link
          key={anime?.id}
          prefetch={false}
          className="size-fit"
          href={`/anime/${anime?.id}`}
        >
          <AnimeCard
            title={anime?.title?.romaji}
            color={anime?.coverImage?.color}
            imageUrl={anime?.coverImage?.large}
          />
        </Link>
      ))}

      {(isUninitialized || isFetching) && <p>Loading...</p>}

      {/* TODO: button to retry fetching/test if error clears */}
      {error && <p>Error loading top anime: {error.message}</p>}

      <div ref={observeIntersection} />
    </>
  );
};

export default TopAnimeList;
