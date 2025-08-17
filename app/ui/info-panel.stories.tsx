import {
  MediaFormat,
  MediaSeason,
  MediaSource,
  MediaStatus,
} from "@/app/gql/sdk";

import InfoPanel, { type Anime } from "@/app/ui/info-panel";

import { sizes } from "@/app/ui/utils";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: InfoPanel,
} satisfies Meta<typeof InfoPanel>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},

  render: (args) => (
    <div
      style={{
        width: sizes.xl.width,
      }}
    >
      <InfoPanel {...args} />
    </div>
  ),
};

const frieren = {
  title: {
    romaji: "Sousou no Frieren",
    native: "葬送のフリーレン",
    english: "Frieren: Beyond Journey’s End",
  },
  format: MediaFormat.Tv,
  episodes: 28,
  duration: 24,
  status: MediaStatus.Finished,
  startDate: {
    day: 29,
    month: 9,
    year: 2023,
  },
  endDate: {
    day: 22,
    month: 3,
    year: 2024,
  },
  season: MediaSeason.Fall,
  seasonYear: 2023,
  averageScore: 91,
  studios: {
    nodes: [
      {
        name: "Toho",
        id: 245,
        isAnimationStudio: false,
      },
      {
        name: "MADHOUSE",
        id: 11,
        isAnimationStudio: true,
      },
      {
        name: "Shogakukan",
        id: 6161,
        isAnimationStudio: false,
      },
      {
        name: "Nippon Television Network",
        id: 6620,
        isAnimationStudio: false,
      },
      {
        name: "Shogakukan-Shueisha Productions",
        id: 62,
        isAnimationStudio: false,
      },
      {
        name: "Aniplex",
        id: 17,
        isAnimationStudio: false,
      },
      {
        name: "Dentsu",
        id: 53,
        isAnimationStudio: false,
      },
    ],
  },
  source: MediaSource.Manga,
  hashtag: "#フリーレン #frieren",
  genres: ["Adventure", "Drama", "Fantasy"],
  synonyms: [
    "Frieren at the Funeral",
    "장송의 프리렌",
    "Frieren - Oltre la Fine del Viaggio",
    "คำอธิษฐานในวันที่จากลา Frieren",
    "Frieren e a Jornada para o Além",
    "Frieren – Nach dem Ende der Reise",
    "葬送的芙莉蓮",
    "Frieren: Más allá del final del viaje",
    "Frieren en el funeral",
    "Sōsō no Furīren",
    "Frieren. U kresu drogi",
    "Frieren - Pháp sư tiễn táng",
    "Фрирен, провожающая в последний путь",
    "فريرن: ما وراء نهاية الرحلة",
    "Frieren: Tras finalizar el viaje",
  ],
} satisfies Anime;

export const Frieren: Story = {
  args: {
    anime: frieren,
  },
  render: (args) => (
    <div
      style={{
        width: sizes.xl.width,
      }}
    >
      <InfoPanel {...args} />
    </div>
  ),
};

const gupMovie = {
  title: {
    romaji: "Girls und Panzer Movie",
    native: "ガールズ&パンツァー 劇場版",
    english: "Girls und Panzer der Film",
  },
  format: MediaFormat.Movie,
  episodes: 1,
  duration: 120,
  status: MediaStatus.Finished,
  startDate: {
    day: 21,
    month: 11,
    year: 2015,
  },
  endDate: {
    day: 21,
    month: 11,
    year: 2015,
  },
  season: MediaSeason.Fall,
  seasonYear: 2015,
  averageScore: 81,
  studios: {
    nodes: [
      {
        name: "Actas",
        id: 60,
        isAnimationStudio: true,
      },
      {
        name: "Q-Tec",
        id: 6297,
        isAnimationStudio: false,
      },
      {
        name: "Movic",
        id: 166,
        isAnimationStudio: false,
      },
      {
        name: "Hakuhodo DY Music & Pictures",
        id: 777,
        isAnimationStudio: false,
      },
      {
        name: "Lantis",
        id: 104,
        isAnimationStudio: false,
      },
      {
        name: "Sentai Filmworks",
        id: 376,
        isAnimationStudio: false,
      },
      {
        name: "Bandai Visual",
        id: 23,
        isAnimationStudio: false,
      },
    ],
  },
  source: MediaSource.Original,
  hashtag: "#garupan",
  genres: ["Action", "Sports"],
  synonyms: [],
} satisfies Anime;

export const GirlsUndPanzerMovie: Story = {
  args: {
    anime: gupMovie,
  },
  render: (args) => (
    <div
      style={{
        width: sizes.xl.width,
      }}
    >
      <InfoPanel {...args} />
    </div>
  ),
};

const priparis = {
  title: {
    romaji: "PriPara Movie: Mi~nna no Akogare♪ Let's Go☆PriParis",
    native: "映画 プリパラ み～んなのあこがれ♪ レッツゴー☆プリパリ",
    english: null,
  },
  format: MediaFormat.Movie,
  episodes: 1,
  duration: 72,
  status: MediaStatus.Finished,
  startDate: {
    day: 12,
    month: 3,
    year: 2016,
  },
  endDate: {
    day: 12,
    month: 3,
    year: 2016,
  },
  season: MediaSeason.Winter,
  seasonYear: 2016,
  averageScore: 72,
  studios: {
    nodes: [
      {
        name: "Tatsunoko Production",
        id: 103,
        isAnimationStudio: true,
      },
      {
        name: "Passione",
        id: 911,
        isAnimationStudio: true,
      },
      {
        name: "Avex Pictures",
        id: 6429,
        isAnimationStudio: false,
      },
      {
        name: "Takara Tomy",
        id: 327,
        isAnimationStudio: false,
      },
      {
        name: "Tatsunoko Production",
        id: 103,
        isAnimationStudio: true,
      },
      {
        name: "TV Tokyo",
        id: 16,
        isAnimationStudio: false,
      },
      {
        name: "Aeon Entertainment",
        id: 6619,
        isAnimationStudio: false,
      },
    ],
  },
  source: MediaSource.Original,
  hashtag: "#pripara",
  genres: ["Music"],
  synonyms: [],
} satisfies Anime;

export const PriparaMovie: Story = {
  args: {
    anime: priparis,
  },
  render: (args) => (
    <div
      style={{
        width: sizes.xl.width,
      }}
    >
      <InfoPanel {...args} />
    </div>
  ),
};
