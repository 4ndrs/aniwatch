import {
  formatDuration,
  MediaFormatDisplayMap,
  MediaStatusDisplayMap,
} from "@/app/ui/utils";

import Skeleton from "@/app/ui/skeleton";

import { MediaFormat } from "@/app/gql/graphql";

import type { AnimeQuery } from "@/app/gql/sdk";

export type Anime = Pick<
  NonNullable<AnimeQuery["Media"]>,
  | "title"
  | "format"
  | "episodes"
  | "status"
  | "season"
  | "seasonYear"
  | "source"
  | "genres"
  | "hashtag"
  | "startDate"
  | "endDate"
  | "studios"
  | "duration"
  | "synonyms"
  | "averageScore"
>;

type Props = {
  anime?: Anime | null;
};

const InfoPanel = ({ anime }: Props) => {
  if (!anime) {
    return (
      <aside className="bg-foreground-sp rounded-[3px] p-2">
        No anime data available
      </aside>
    );
  }

  const studios = anime.studios?.edges?.filter((studio) => studio?.isMain);
  const producers = anime.studios?.edges?.filter((studio) => !studio?.isMain);

  // the genres is defined as string in the docs but is actually an array of strings
  const genres = (
    Array.isArray(anime.genres) ? anime.genres : [anime.genres]
  ) as string[] | null | undefined;

  return (
    <aside className="bg-foreground-sp rounded-[3px] p-[1.125rem]">
      <dl className="flex flex-col gap-[0.875rem]">
        {!!anime.format && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Format
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {MediaFormatDisplayMap[anime.format]}
            </dd>
          </div>
        )}

        {!!anime.episodes && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Episodes
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.episodes}
            </dd>
          </div>
        )}

        {!!anime.duration && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Episode Duration
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {formatDuration(anime.duration)}
            </dd>
          </div>
        )}

        {!!anime.status && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Status
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
              {MediaStatusDisplayMap[anime.status]}
            </dd>
          </div>
        )}

        {anime.format !== MediaFormat.Movie &&
          !!anime.startDate?.day &&
          !!anime.startDate?.year &&
          !!anime.startDate?.month && (
            <div>
              <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
                Start Date
              </dt>
              <dd className="text-lighter text-xs leading-[0.975rem]">
                {formatDate({
                  day: anime.startDate.day,
                  month: anime.startDate.month,
                  year: anime.startDate.year,
                })}
              </dd>
            </div>
          )}

        {anime.format !== MediaFormat.Movie &&
          !!anime.endDate?.day &&
          !!anime.endDate?.year &&
          !!anime.endDate?.month && (
            <div>
              <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
                End Date
              </dt>
              <dd className="text-lighter text-xs leading-[0.975rem]">
                {formatDate({
                  day: anime.endDate.day,
                  month: anime.endDate.month,
                  year: anime.endDate.year,
                })}
              </dd>
            </div>
          )}

        {anime.format === MediaFormat.Movie &&
          !!anime.startDate?.day &&
          !!anime.startDate?.year &&
          !!anime.startDate?.month && (
            <div>
              <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
                Release Date
              </dt>
              <dd className="text-lighter text-xs leading-[0.975rem]">
                {formatDate({
                  day: anime.startDate.day,
                  month: anime.startDate.month,
                  year: anime.startDate.year,
                })}
              </dd>
            </div>
          )}

        {!!anime.season && !!anime.seasonYear && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Season
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
              {anime.season.toLowerCase()} {anime.seasonYear}
            </dd>
          </div>
        )}

        {!!anime.averageScore && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Average Score
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.averageScore}%
            </dd>
          </div>
        )}

        {!!studios && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Studios
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              <ul className="flex flex-col">
                {studios.map((studio) => (
                  <li key={studio?.node?.id}>{studio?.node?.name}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}

        {!!producers && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Producers
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              <ul className="flex flex-col">
                {producers.map((producer) => (
                  <li key={producer?.node?.id}>{producer?.node?.name}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}

        {!!anime.source && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Source
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
              {anime.source.toLowerCase().replace("_", " ")}
            </dd>
          </div>
        )}

        {!!anime.hashtag && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Hashtag
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.hashtag}
            </dd>
          </div>
        )}

        {!!genres && genres.length > 0 && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Genres
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              <ul className="flex flex-col">
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}

        {!!anime.title?.romaji && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Romaji
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.title.romaji}
            </dd>
          </div>
        )}

        {!!anime.title?.english && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              English
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.title.english}
            </dd>
          </div>
        )}

        {!!anime.title?.native && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Native
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              {anime.title.native}
            </dd>
          </div>
        )}

        {!!anime.synonyms && anime.synonyms.length > 0 && (
          <div>
            <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
              Synonyms
            </dt>
            <dd className="text-lighter text-xs leading-[0.975rem]">
              <ul className="flex flex-col">
                {anime.synonyms.map((synonym, index) => (
                  <li key={index}>{synonym}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
};

const formatDate = (date: { day: number; month: number; year: number }) => {
  const newDate = new Date(date.year, date.month - 1, date.day);

  return Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  }).format(newDate);
};

export const InfoPanelSkeleton = () => (
  <div aria-hidden className="bg-foreground-sp rounded-[3px] p-[1.125rem]">
    <dl className="flex flex-col gap-[0.875rem]">
      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Format
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Format</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Episodes
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>12</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Episode Duration
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>23 mins</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Status
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
          <Skeleton>Airing</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Start Date
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Sep 20, 2024</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          End Date
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Sep 20, 2024</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Season
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
          <Skeleton>Winter 2017</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Average Score
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>90%</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Studios
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <ul className="flex flex-col gap-1">
            <li>
              <Skeleton>Studio One</Skeleton>
            </li>
          </ul>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Producers
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <ul className="flex flex-col gap-1">
            <li>
              <Skeleton>Producer One</Skeleton>
            </li>
            <li>
              <Skeleton>Producer Zero two</Skeleton>
            </li>
            <li>
              <Skeleton>Producer 3</Skeleton>
            </li>
          </ul>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Source
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem] capitalize">
          <Skeleton>Manga</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Hashtag
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>#SomeHashtag</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Genres
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <ul className="flex flex-col gap-1">
            <li>
              <Skeleton>Genre 1</Skeleton>
            </li>
            <li>
              <Skeleton>Genre two</Skeleton>
            </li>
            <li>
              <Skeleton>Genre three</Skeleton>
            </li>
          </ul>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Romaji
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Some Romaji Title</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          English
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Some English Title</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Native
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <Skeleton>Some Native Title</Skeleton>
        </dd>
      </div>

      <div>
        <dt className="text-text mb-[0.3125rem] text-[0.8125rem] leading-[0.934375rem] font-medium">
          Synonyms
        </dt>
        <dd className="text-lighter text-xs leading-[0.975rem]">
          <ul className="flex flex-col gap-1">
            <li>
              <Skeleton>Some synonym with long name</Skeleton>
            </li>
            <li>
              <Skeleton>Some short synonym</Skeleton>
            </li>
            <li>
              <Skeleton>Some synonym with crazy name</Skeleton>
            </li>
            <li>
              <Skeleton>Some other synonym</Skeleton>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
);

export default InfoPanel;
