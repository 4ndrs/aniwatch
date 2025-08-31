import SearchBar from "@/app/ui/search-bar";
import YearListBox from "@/app/ui/year-combo-box/list-box";
import TopAnimeList from "@/app/ui/top-anime-list";
import YearComboBox from "@/app/ui/year-combo-box";

import { Suspense } from "react";
import { getMinMaxDates } from "@/app/lib/server-fetchers";

/* just in case i forget: suspense used without skeletons here are needed for
 * when using useSearchParams (nuqs uses it internally), otherwise it will opt
 * the whole page into client-side rendering; thankfully there is a build error
 * if they are removed so it won't happen silently */

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

      <div className="flex flex-col gap-2.5">
        <label
          id="year-label"
          className="text-gray-x900 text-[0.9375rem] leading-[1.078125rem] font-semibold"
        >
          Year
        </label>

        <Suspense>
          <YearComboBox aria-labelledby="year-label">
            <Suspense fallback="Loading...">
              <YearListBox promise={getMinMaxDates()} />
            </Suspense>
          </YearComboBox>
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
