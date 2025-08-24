import SearchBar from "@/app/ui/search-bar";
import TopAnimeList from "@/app/ui/top-anime-list";

import { Suspense } from "react";

const Home = () => (
  <main className="mx-auto max-w-[71.25rem] p-4 2xl:max-w-[85rem]">
    <h1 className="text-gray-x800 my-8.5 font-(family-name:--font-overpass) text-[1.75rem] leading-[2rem] font-extrabold">
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

        <Suspense>
          <SearchBar id="search-bar" />
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
