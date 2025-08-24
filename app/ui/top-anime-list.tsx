"use client";

import Link from "next/link";
import AnimeCard, { AnimeCardSkeleton } from "@/app/ui/anime-card";
import InfoPreview from "@/app/ui/info-preview";

import { useDebounce } from "@/app/hooks/debounce";
import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";
import { DEBOUNCE_VALUE, slugify } from "@/app/ui/utils";
import { PER_PAGE, useGetTopAnimeInfiniteQuery } from "@/app/lib/anilist-api";

import type { TopAnimeQuery } from "@/app/gql/graphql";

const TopAnimeList = () => {
  const search = useQueryState("search")[0];
  const debouncedSearch = useDebounce(search, DEBOUNCE_VALUE, search == null);

  const {
    error,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isUninitialized,
    currentData: data,
  } = useGetTopAnimeInfiniteQuery({ search: debouncedSearch });

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
          <InfoPreview key={anime?.id} anime={anime} aria-labelledby={titleId}>
            <Link href={`/anime/${anime?.id}`}>
              <AnimeCard
                title={anime?.title?.romaji}
                titleId={titleId}
                imageUrl={anime?.coverImage?.large}
              />
            </Link>
          </InfoPreview>
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
