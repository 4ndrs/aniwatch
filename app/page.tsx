import Link from "next/link";
import AnimeCard from "@/app/ui/anime-card";
import ErrorBoundary from "@/app/ui/error-boundary";

import { sdk } from "@/app/lib/anilist";
import { Suspense } from "react";

const Home = () => (
  <main className="mx-auto max-w-[71.25rem] p-4 2xl:max-w-[85rem]">
    <h1 className="my-8.5 text-[1.75rem] font-extrabold">Top Anime</h1>

    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </ErrorBoundary>
  </main>
);

const List = async () => {
  const data = await sdk.TopAnime({ page: 1, perPage: 20 });

  if (!data.Page?.media) {
    return <p>No anime found.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {data.Page.media.map((anime) => (
        <Link href={`/anime/${anime?.id}`} key={anime?.id}>
          <AnimeCard
            title={anime?.title?.romaji}
            color={anime?.coverImage?.color}
            imageUrl={anime?.coverImage?.large}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
