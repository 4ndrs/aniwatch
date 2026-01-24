import SearchBar from "@/app/ui/search-bar";
import TopAnimeList from "@/app/ui/top-anime-list";
import YearComboBox from "@/app/ui/year-combo-box";
import FieldSkeleton from "@/app/ui/field-skeleton";

import { Suspense } from "react";
import { getMinMaxDates } from "@/app/lib/server-fetchers";

const Home = () => (
  <main className="mx-auto max-w-285 p-4 2xl:max-w-340">
    <h1 className="text-gray-x800 my-8.5 font-(family-name:--font-overpass) text-[1.75rem] leading-8 font-extrabold">
      Top Anime
    </h1>

    <div className="my-10 grid gap-6 font-(family-name:--font-overpass) lg:grid-cols-4">
      <div className="flex flex-col gap-2.5">
        <label
          htmlFor="search-bar"
          className="text-gray-x900 text-[0.9375rem] leading-[1.078125rem] font-semibold"
        >
          Search
        </label>

        <Suspense fallback=<FieldSkeleton />>
          <SearchBar id="search-bar" />
        </Suspense>
      </div>

      <div className="flex flex-col gap-2.5">
        <label
          id="year-label"
          className="text-gray-x900 text-[0.9375rem] leading-[1.078125rem] font-semibold"
        >
          Year
        </label>

        <Suspense fallback=<FieldSkeleton />>
          <YearComboBox
            aria-labelledby="year-label"
            promise={getMinMaxDates()}
          />
        </Suspense>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <Suspense>
        <TopAnimeList />
      </Suspense>
    </div>
  </main>
);

export default Home;
