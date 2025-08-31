import { sdk } from "@/app/lib/anilist";
import { createApi } from "@reduxjs/toolkit/query/react";

import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { TopAnimeQuery } from "@/app/gql/sdk";

type Year = string | null;
type Search = string | null;

type TopAnimeQueryArg = {
  year?: Year;
  search?: Search;
};

type InitialPageParam = {
  page: number;
  perPage: number;
};

type GraphQLBaseQueryArgs<T> = {
  page: number;
  perPage: number;
  callback: (args: { page: number; perPage: number }) => Promise<T>;
};

export const PER_PAGE = 20;

const baseQuery: BaseQueryFn<
  GraphQLBaseQueryArgs<unknown>,
  unknown,
  unknown
> = async ({ page, perPage, callback }) => {
  try {
    const data = await callback({ page, perPage });

    return { data };
  } catch (error) {
    console.error(`Error loading data on page ${page}:`, error);

    return { error };
  }
};

export const anilistApi = createApi({
  baseQuery,
  endpoints: (build) => ({
    getTopAnime: build.infiniteQuery<
      TopAnimeQuery,
      TopAnimeQueryArg | void,
      InitialPageParam
    >({
      keepUnusedDataFor: 60 * 60 * 60, // don't refresh often, messes up scroll when doing infinite scrolling
      infiniteQueryOptions: {
        initialPageParam: {
          page: 1,
          perPage: PER_PAGE,
        },
        getNextPageParam: (lastPage, _, lastPageParam) => {
          if (!lastPage.Page?.pageInfo?.hasNextPage) {
            return undefined;
          }

          const nextPage = lastPageParam.page + 1;

          return {
            ...lastPageParam,
            page: nextPage,
          };
        },
      },
      query: ({ queryArg, pageParam }) => ({
        ...pageParam,
        callback: ({ page, perPage }) =>
          sdk.TopAnime({
            page,
            perPage,
            search: queryArg?.search || undefined,
            startYear: (queryArg?.year && queryArg.year + "0000") || undefined,
          }),
      }),
    }),
  }),
});

export const { useGetTopAnimeInfiniteQuery } = anilistApi;
