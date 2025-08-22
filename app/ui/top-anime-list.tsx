"use client";

import Link from "next/link";
import AnimeCard, { AnimeCardSkeleton } from "@/app/ui/anime-card";
import InfoPreview from "@/app/ui/info-preview";

import { slugify } from "@/app/ui/utils";
import { useCallback, useMemo } from "react";
import { PER_PAGE, useGetTopAnimeInfiniteQuery } from "@/app/lib/anilist-api";

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
          if (entries[0].isIntersecting) {
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
    [fetchNextPage],
  );

  const hasNoErrors = !error;
  const hasAtLeastOnePage = !!data;

  return (
    <>
      {topAnime?.map((anime) => {
        const titleId = anime?.title?.romaji
          ? slugify(anime.title.romaji) + "-card"
          : undefined;

        return (
          <Link
            href={`/anime/${anime?.id}`}
            key={anime?.id}
            className="size-fit"
          >
            <InfoPreview anime={anime} aria-labelledby={titleId}>
              <AnimeCard
                title={anime?.title?.romaji}
                titleId={titleId}
                imageUrl={anime?.coverImage?.large}
              />
            </InfoPreview>
          </Link>
        );
      })}

      {(isUninitialized || isFetching) &&
        Array.from({ length: PER_PAGE }).map((_, index) => (
          <AnimeCardSkeleton key={index} />
        ))}

      {/* TODO: button to retry fetching/test if error clears */}
      {error && <p>Error loading top anime: {error.message}</p>}

      {!isFetching && hasNoErrors && hasAtLeastOnePage && hasNextPage && (
        <div ref={observeIntersection} />
      )}
    </>
  );
};

export default TopAnimeList;
