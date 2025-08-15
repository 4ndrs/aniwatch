import Image from "next/image";
import ErrorBoundary from "@/app/ui/error-boundary";

import { sdk } from "@/app/lib/anilist";
import { Suspense } from "react";
import Link from "next/link";

const Home = () => (
  <main>
    <h1>Top Anime</h1>

    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </ErrorBoundary>
  </main>
);

const List = async () => {
  const data = await sdk.TopAnime({ page: 1, perPage: 10 });

  if (!data.Page?.media) {
    return <p>No anime found.</p>;
  }

  return data.Page.media.map((anime) => (
    <Link href={`/anime/${anime?.id}`} key={anime?.id}>
      <article>
        <Image
          width={230}
          height={320}
          src={anime?.coverImage?.large || ""}
          alt={anime?.title?.romaji || "Anime Cover"}
        />
        <h2>{anime?.title?.romaji}</h2>
        <p>score: {anime?.averageScore}</p>
      </article>
    </Link>
  ));
};

export default Home;
