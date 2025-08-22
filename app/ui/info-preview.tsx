import Color from "color";

import {
  PiSmileyBold,
  PiSmileyMehBold,
  PiSmileyBlankBold,
} from "react-icons/pi";

import { TopAnimeQuery } from "@/app/gql/sdk";

type Anime = Pick<
  NonNullable<NonNullable<NonNullable<TopAnimeQuery["Page"]>["media"]>[number]>,
  | "format"
  | "genres"
  | "season"
  | "studios"
  | "episodes"
  | "seasonYear"
  | "coverImage"
  | "averageScore"
> & {
  coverImage?: {
    color?: string | null;
  } | null;
};

type Props = {
  anime?: Anime | null;
  children?: React.ReactNode;
  "aria-labelledby"?: string;
};

const InfoPreview = ({ anime, children, ...rest }: Props) => (
  <div role="tooltip" className="group relative size-fit">
    {children}

    <div
      style={{
        ...(generateColors(anime?.coverImage?.color) as React.CSSProperties),
      }}
      aria-labelledby={rest["aria-labelledby"]}
      className="bg-foreground-sp pointer-events-none absolute top-[3%] right-0 z-[1] flex w-[18.125rem] translate-x-[calc(100%+1rem)] scale-92 flex-col gap-[1.375rem] rounded-md p-6 font-(family-name:--font-overpass) leading-[1.125rem] text-white opacity-0 transition-transform duration-220 group-hover:scale-100 group-hover:opacity-100 after:absolute after:top-3 after:left-[-0.5625rem] after:size-2.5 after:[border-width:6px_9px_6px_0] after:[border-style:solid] after:[border-color:transparent_var(--color-foreground-sp)_transparent_transparent] after:content-['']"
    >
      <div className="text-gray-x800 flex justify-between font-semibold capitalize">
        <span aria-label="Season">
          {anime?.season?.toLowerCase()} {anime?.seasonYear}
        </span>

        {anime?.averageScore && (
          <span aria-label="Average Score" className="flex items-center gap-1">
            {getSmiley(anime.averageScore)}
            {anime.averageScore}%
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 text-[0.8125rem] leading-[0.934375rem]">
        <span aria-label="Studios" className="font-bold text-(--media-text)">
          {anime?.studios?.edges
            ?.filter((studio) => !!studio?.isMain && !!studio.node?.name)
            ?.map((studio) => studio?.node?.name)
            .join(", ")}
        </span>
        <span className="text-foreground font-semibold">
          <span aria-label="Format">{anime?.format}</span> •{" "}
          <span aria-label="Episodes">{anime?.episodes} episodes</span>
        </span>
      </div>

      <ul aria-label="Genres" className="flex flex-wrap gap-3 text-xs">
        {anime?.genres?.slice(0, 3).map((genre) => (
          <li
            key={genre}
            className="rounded-[0.625rem] bg-(--media-background) px-3 leading-5 font-bold text-nowrap text-(--media-background-text) lowercase"
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const generateColors = (hex?: string | null) => {
  if (!hex) {
    return;
  }

  const base = Color(hex).hsl();

  const h = base.hue();
  const s = base.saturationl();

  return {
    "--media-text": Color.hsl(h, Math.min(s + 5, 100), 70).string(),
    "--media-background": Color.hsl(h + 3, 100, 79).string(),
    "--media-background-text": Color.hsl(h, Math.max(s - 30, 30), 27).string(),
    "--media-overlay-text": Color.hsl(h, Math.min(s + 5, 100), 70).string(),
  };
};

const className = "size-[1.1875rem]";

const getSmiley = (score: number) => {
  if (score < 60) {
    return <PiSmileyBold className={className + " text-red"} />;
  }

  if (score < 80) {
    return <PiSmileyMehBold className={className + " text-orange"} />;
  }

  if (score >= 80) {
    return <PiSmileyBold className={className + " text-green"} />;
  }

  return <PiSmileyBlankBold className={className} />;
};

export default InfoPreview;
