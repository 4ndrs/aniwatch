import {
  MediaFormat,
  MediaSeason,
  MediaSource,
  MediaStatus,
} from "@/app/gql/sdk";

import InfoPanel, { InfoPanelSkeleton, type Anime } from "@/app/ui/info-panel";

import { sizes } from "@/app/ui/utils";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: InfoPanel,
} satisfies Meta<typeof InfoPanel>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultWithSkeleton: Story = {
  args: {},

  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanel {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanelSkeleton />
      </div>
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
    edges: [
      {
        isMain: false,
        node: {
          name: "Toho",
          id: 245,
        },
      },
      {
        isMain: true,
        node: {
          name: "MADHOUSE",
          id: 11,
        },
      },
      {
        isMain: false,
        node: {
          name: "Shogakukan",
          id: 6161,
        },
      },
      {
        isMain: false,
        node: {
          name: "Nippon Television Network",
          id: 6620,
        },
      },
      {
        isMain: false,
        node: {
          name: "Shogakukan-Shueisha Productions",
          id: 62,
        },
      },
      {
        isMain: false,
        node: {
          name: "Aniplex",
          id: 17,
        },
      },
      {
        isMain: false,
        node: {
          name: "Dentsu",
          id: 53,
        },
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

export const FrierenWithSkeleton: Story = {
  args: {
    anime: frieren,
  },
  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanel {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanelSkeleton />
      </div>
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
    edges: [
      {
        isMain: true,
        node: {
          name: "Actas",
          id: 60,
        },
      },
      {
        isMain: false,
        node: {
          name: "Q-Tec",
          id: 6297,
        },
      },
      {
        isMain: false,
        node: {
          name: "Movic",
          id: 166,
        },
      },
      {
        isMain: false,
        node: {
          name: "Hakuhodo DY Music & Pictures",
          id: 777,
        },
      },
      {
        isMain: false,
        node: {
          name: "Lantis",
          id: 104,
        },
      },
      {
        isMain: false,
        node: {
          name: "Sentai Filmworks",
          id: 376,
        },
      },
      {
        isMain: false,
        node: {
          name: "Bandai Visual",
          id: 23,
        },
      },
    ],
  },
  source: MediaSource.Original,
  hashtag: "#garupan",
  genres: ["Action", "Sports"],
  synonyms: [],
} satisfies Anime;

export const GirlsUndPanzerMovieWithSkeleton: Story = {
  args: {
    anime: gupMovie,
  },
  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanel {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanelSkeleton />
      </div>
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
    edges: [
      {
        isMain: true,
        node: {
          name: "Tatsunoko Production",
          id: 103,
        },
      },
      {
        isMain: true,
        node: {
          name: "Passione",
          id: 911,
        },
      },
      {
        isMain: false,
        node: {
          name: "Avex Pictures",
          id: 6429,
        },
      },
      {
        isMain: false,
        node: {
          name: "Takara Tomy",
          id: 327,
        },
      },
      {
        isMain: false,
        node: {
          name: "Tatsunoko Production",
          id: 103,
        },
      },
      {
        isMain: false,
        node: {
          name: "TV Tokyo",
          id: 16,
        },
      },
      {
        isMain: false,
        node: {
          name: "Aeon Entertainment",
          id: 6619,
        },
      },
    ],
  },
  source: MediaSource.Original,
  hashtag: "#pripara",
  genres: ["Music"],
  synonyms: [],
} satisfies Anime;

export const PriparaMovieWithSkeleton: Story = {
  args: {
    anime: priparis,
  },
  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanel {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanelSkeleton />
      </div>
    </div>
  ),
};

const kusuriya = {
  title: {
    romaji: "Kusuriya no Hitorigoto 2nd Season",
    english: "The Apothecary Diaries Season 2",
    native: "薬屋のひとりごと 第2期",
  },
  format: MediaFormat.Tv,
  episodes: 24,
  duration: 24,
  status: MediaStatus.Finished,
  startDate: {
    day: 10,
    month: 1,
    year: 2025,
  },
  endDate: {
    day: 4,
    month: 7,
    year: 2025,
  },
  season: MediaSeason.Winter,
  seasonYear: 2025,
  averageScore: 88,
  studios: {
    edges: [
      {
        isMain: false,
        node: {
          name: "Toho",
          id: 245,
        },
      },
      {
        isMain: true,
        node: {
          name: "TOHO animation STUDIO",
          id: 7368,
        },
      },
      {
        isMain: true,
        node: {
          name: "OLM",
          id: 28,
        },
      },
      {
        isMain: false,
        node: {
          name: "Nippon Television Network",
          id: 6620,
        },
      },
      {
        isMain: false,
        node: {
          name: "Imagica Infos",
          id: 7472,
        },
      },
      {
        isMain: false,
        node: {
          name: "OLM",
          id: 28,
        },
      },
      {
        isMain: false,
        node: {
          name: "Dentsu",
          id: 53,
        },
      },
      {
        isMain: false,
        node: {
          name: "Shogakukan",
          id: 6161,
        },
      },
      {
        isMain: false,
        node: {
          name: "Square Enix",
          id: 58,
        },
      },
    ],
  },
  source: MediaSource.LightNovel,
  hashtag: "#薬屋のひとりごと #薬屋２期",
  genres: ["Drama", "Mystery"],
  synonyms: [
    "Die Tagebücher der Apothekerin Season 2",
    "Diários de uma Apotecária 2ª Temporada",
    "Монолог фармацевта 2",
  ],
} satisfies Anime;

// edge case, OLM is both main and non-main studio
export const KusuriyaNoHitorigoto2ndSeasonWithSkeleton: Story = {
  args: {
    anime: kusuriya,
  },
  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanel {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <InfoPanelSkeleton />
      </div>
    </div>
  ),
};
