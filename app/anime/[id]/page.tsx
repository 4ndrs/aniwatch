import Image from "next/image";

import { sdk } from "@/app/lib/anilist";
import { Suspense } from "react";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Anime = ({ params }: Props) => (
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <Info params={params} />
    </Suspense>
  </main>
);

const Info = async ({ params }: Props) => {
  const id = Number((await params).id);

  const { error, anime } = await loadAnime(id);

  if (error) {
    return notFound();
  }

  return (
    <>
      <Image
        width={460}
        height={690}
        src={anime.coverImage?.extraLarge || ""}
        alt={anime.title?.romaji || "Anime Cover"}
      />
      <h1>{anime.title?.romaji}</h1>
      <p>{anime.description || "No description available."}</p>
      <p>
        Season: {anime.season} {anime.seasonYear}
      </p>
    </>
  );
};

const loadAnime = async (id: number) => {
  try {
    const data = await sdk.Anime({ id });
    const anime = data?.Page?.media?.[0];

    if (!anime) {
      throw new Error("Anime not found");
    }

    return { anime, error: false } as const;
  } catch (error) {
    console.error(`Error loading anime with id ${id}:`, error);
    return { error: true } as const;
  }
};

export default Anime;
