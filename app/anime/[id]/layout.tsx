import Image from "next/image";
import Cover from "@/app/ui/cover";
import Description from "@/app/ui/description";

import { sdk } from "@/app/lib/anilist";
import { sizes } from "@/app/ui/utils";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";

type Props = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

const AnimeLayout = ({ children, params }: Props) => (
  <main>
    <div className="relative h-86 w-full bg-gray-700 brightness-80">
      <Suspense fallback={<div>Loading banner...</div>}>
        <BannerImage params={params} />
      </Suspense>
    </div>

    <div className="bg-foreground-sp mb-[1.875rem]">
      <div className="mx-auto flex max-w-[71.25rem] gap-[1.875rem] px-4 py-[1.5625rem] 2xl:max-w-[85rem]">
        <div
          style={{ width: sizes.xl.width }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -top-34 left-0">
            <Suspense fallback={<div>Loading...</div>}>
              <MainImage params={params} />
            </Suspense>
          </div>
        </div>

        <div className="max-w-[56.25rem]">
          <Suspense fallback={<div>Loading info...</div>}>
            <MainInfo params={params} />
          </Suspense>
        </div>
      </div>
    </div>

    {children}
  </main>
);

const MainInfo = async ({ params }: Pick<Props, "params">) => {
  const id = Number((await params).id);

  const { error, anime } = await loadAnime(id);

  if (error) {
    return notFound();
  }

  return (
    <Description title={anime.title?.romaji} description={anime.description} />
  );
};

const MainImage = async ({ params }: Pick<Props, "params">) => {
  const id = Number((await params).id);

  const { anime } = await loadAnime(id);

  return (
    <Cover
      size="xl"
      className="rounded-xs"
      src={anime?.coverImage?.extraLarge}
      alt={
        anime?.title?.romaji ? "Cover of " + anime.title.romaji : "Anime Cover"
      }
    />
  );
};

const BannerImage = async ({ params }: Pick<Props, "params">) => {
  const id = Number((await params).id);

  const { anime } = await loadAnime(id);

  const banner = anime?.bannerImage;

  return banner ? (
    <>
      <Image
        src={banner}
        alt={
          anime?.title?.romaji
            ? "Banner of " + anime.title.romaji
            : "Anime Banner"
        }
        fill
        className="object-cover"
      />

      <div className="to-shadow-dark/60 absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
    </>
  ) : undefined;
};

const loadAnime = unstable_cache(
  async (id: number) => {
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
  },
  undefined,
  { revalidate: 86400 }, // Cache for 24 hours
);

export default AnimeLayout;
