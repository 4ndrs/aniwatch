import {
  PiSmileyBold,
  PiSmileySadBold,
  PiSmileyMehBold,
  PiSmileyBlankBold,
} from "react-icons/pi";

import Color from "color";

import { MediaFormat, TopAnimeQuery } from "@/app/gql/sdk";
import { formatDuration, MediaFormatDisplayMap } from "@/app/ui/utils";

type Anime = Pick<
  NonNullable<NonNullable<NonNullable<TopAnimeQuery["Page"]>["media"]>[number]>,
  | "format"
  | "genres"
  | "season"
  | "endDate"
  | "studios"
  | "duration"
  | "episodes"
  | "startDate"
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

const FormatDisplayMap = {
  ...MediaFormatDisplayMap,
  // changes on this component
  [MediaFormat.Tv]: "TV Show",
};

const InfoPreview = ({ anime, children, ...rest }: Props) => {
  const season =
    anime?.season && anime.seasonYear
      ? anime.season.toLowerCase() + " " + anime.seasonYear
      : anime?.startDate?.year &&
          anime.endDate?.year &&
          anime.startDate.year !== anime.endDate?.year
        ? anime.startDate.year + " - " + anime.endDate.year
        : anime?.startDate?.year;

  const format = anime?.format && FormatDisplayMap[anime.format];

  const duration =
    anime?.format &&
    anime.format === MediaFormat.Movie &&
    anime.duration != null
      ? formatDuration(anime.duration)
      : anime?.format &&
          anime.format !== MediaFormat.Movie &&
          anime.episodes != null
        ? anime.episodes + " episode" + (anime.episodes === 1 ? "" : "s")
        : undefined;

  return (
    <div
      role="tooltip"
      className="group relative size-fit"
      style={{
        ...(generateColors(anime?.coverImage?.color) as React.CSSProperties),
      }}
    >
      {children}

      <div
        aria-labelledby={rest["aria-labelledby"]}
        className="bg-foreground-sp pointer-events-none absolute top-[3%] right-0 z-[1] flex min-w-[18.125rem] translate-x-[calc(100%+1rem)] scale-92 flex-col gap-[1.375rem] rounded-md p-6 font-(family-name:--font-overpass) leading-[1.125rem] text-white opacity-0 transition-transform duration-220 group-hover:scale-100 group-hover:opacity-100 after:absolute after:top-3 after:left-[-0.5625rem] after:size-2.5 after:[border-width:6px_9px_6px_0] after:[border-style:solid] after:[border-color:transparent_var(--color-foreground-sp)_transparent_transparent] after:content-['']"
      >
        <div className="text-gray-x800 flex items-center justify-between font-semibold capitalize">
          <span aria-label="Season">{season}</span>

          {anime?.averageScore && (
            <span
              aria-label="Average Score"
              className="flex items-center gap-1"
            >
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
          <span
            aria-label="Format and Duration"
            className="text-foreground font-semibold"
          >
            {format}
            {format && duration ? <span className="px-2">•</span> : undefined}
            {duration}
          </span>
        </div>

        <ul aria-label="Genres" className="flex gap-3 text-xs">
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
};

const generateColors = (hex?: string | null) => {
  if (!hex) {
    hex = "#8ba0b2";
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

const getSmiley = (score: number) => {
  const className = "size-[1.1875rem]";

  if (score < 60) {
    return <PiSmileySadBold className={className + " text-red"} />;
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
