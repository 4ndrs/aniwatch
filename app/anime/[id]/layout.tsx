import Image from "next/image";
import Skeleton from "@/app/ui/skeleton";
import Cover, { CoverSkeleton } from "@/app/ui/cover";
import Rating, { RatingSkeleton } from "@/app/ui/rating";
import InfoPanel, { InfoPanelSkeleton } from "@/app/ui/info-panel";
import Description, { DescriptionSkeleton } from "@/app/ui/description";
import ExternalLinks, { ExternalLinksSkeleton } from "@/app/ui/external-links";

import { sizes } from "@/app/ui/utils";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { loadAnime } from "@/app/lib/server-fetchers";
import { MediaRankType } from "@/app/gql/graphql";

import type { Metadata } from "next";

type Props = LayoutProps<"/anime/[id]">;
type CommonProps = Pick<Props, "params">;

export const generateMetadata = async ({
  params,
}: CommonProps): Promise<Metadata> => {
  const id = Number((await params).id);

  const { anime, error } = await loadAnime(id);

  if (error || !anime) {
    return {
      title: "Anime not found",
      description: "The requested anime could not be found.",
    };
  }

  const title = anime.title?.romaji || "Anime Details";

  const rawDescription =
    anime.description?.replace(/<[^>]*>/g, "") || "No description available.";

  const description =
    rawDescription.slice(0, 160) + (rawDescription.length > 160 ? "…" : "");

  const imageUrl = anime.coverImage?.extraLarge;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
      locale: "en_US",
      type: "article",
    },
  };
};

const AnimeLayout = ({ children, params }: Props) => (
  <main>
    <div className="relative h-86 w-full bg-gray-700 brightness-80">
      <Suspense fallback={<Skeleton className="size-full" />}>
        <BannerImage params={params} />
      </Suspense>
    </div>

    <div className="bg-foreground-sp mb-[1.875rem] min-h-[13rem]">
      <div className="mx-auto flex max-w-[71.25rem] gap-[1.875rem] px-4 py-[1.5625rem] 2xl:max-w-[85rem]">
        <div
          style={{ width: sizes.xl.width }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -top-34 left-0">
            <Suspense
              fallback={<CoverSkeleton size="xl" className="rounded-xs" />}
            >
              <MainImage params={params} />
            </Suspense>
          </div>
        </div>

        <div className="max-w-[56.25rem] flex-1">
          <Suspense fallback={<DescriptionSkeleton />}>
            <MainInfo params={params} />
          </Suspense>
        </div>
      </div>
    </div>

    <div className="mx-auto flex max-w-[71.25rem] gap-[1.875rem] px-4 2xl:max-w-[85rem]">
      <div
        style={{ width: sizes.xl.width }}
        className="flex flex-shrink-0 flex-col gap-4"
      >
        <Suspense fallback={<RatingSkeleton />}>
          <Rankings params={params} />
        </Suspense>

        <Suspense fallback={<InfoPanelSkeleton />}>
          <SideInfoPanel params={params} />
        </Suspense>

        <Suspense fallback={<ExternalLinksSkeleton />}>
          <ExLinks params={params} />
        </Suspense>
      </div>

      {children}
    </div>
  </main>
);

const MainInfo = async ({ params }: CommonProps) => {
  const id = Number((await params).id);

  const { error, anime } = await loadAnime(id);

  if (error) {
    return notFound();
  }

  return (
    <Description title={anime.title?.romaji} description={anime.description} />
  );
};

const MainImage = async ({ params }: CommonProps) => {
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

const BannerImage = async ({ params }: CommonProps) => {
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

const Rankings = async ({ params }: CommonProps) => {
  const id = Number((await params).id);

  const { anime } = await loadAnime(id);

  // only get the highest rated ranking of all time
  const rating = anime?.rankings?.find(
    (ranking) => ranking?.type === MediaRankType.Rated && ranking.allTime,
  );

  return <Rating rank={rating?.rank} context={rating?.context} />;
};

const SideInfoPanel = async ({ params }: CommonProps) => {
  const id = Number((await params).id);

  const { anime } = await loadAnime(id);

  return <InfoPanel anime={anime} />;
};

const ExLinks = async ({ params }: CommonProps) => {
  const id = Number((await params).id);

  const { anime } = await loadAnime(id);

  return <ExternalLinks links={anime?.externalLinks} />;
};

export default AnimeLayout;
