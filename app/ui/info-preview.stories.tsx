import AnimeCard from "@/app/ui/anime-card";
import InfoPreview from "@/app/ui/info-preview";

import { slugify } from "@/app/ui/utils";
import { MediaFormat, MediaSeason, TopAnimeQuery } from "@/app/gql/sdk";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: InfoPreview,
} satisfies Meta<typeof InfoPreview>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview {...args} />
      </div>
    </div>
  ),
};

type Anime = NonNullable<NonNullable<TopAnimeQuery["Page"]>["media"]>[number];

const frieren = {
  id: 154587,
  title: {
    romaji: "Sousou no Frieren",
  },
  coverImage: {
    color: "#bbf1a1",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154587-qQTzQnEJJ3oB.jpg",
  },
  format: MediaFormat.Tv,
  genres: ["Adventure", "Drama", "Fantasy"],
  season: MediaSeason.Fall,
  episodes: 28,
  seasonYear: 2023,
  averageScore: 91,
  startDate: {
    // fake just to check consistency
    year: 2021,
  },
  endDate: {
    year: 2021,
  },
  studios: {
    edges: [
      {
        isMain: false,
        node: {
          id: 245,
          name: "Toho",
        },
      },
      {
        isMain: true,
        node: {
          id: 11,
          name: "MADHOUSE",
        },
      },
      {
        isMain: false,
        node: {
          id: 6161,
          name: "Shogakukan",
        },
      },
      {
        isMain: false,
        node: {
          id: 6620,
          name: "Nippon Television Network",
        },
      },
      {
        isMain: false,
        node: {
          id: 62,
          name: "Shogakukan-Shueisha Productions",
        },
      },
      {
        isMain: false,
        node: {
          id: 17,
          name: "Aniplex",
        },
      },
      {
        isMain: false,
        node: {
          id: 53,
          name: "Dentsu",
        },
      },
    ],
  },
} satisfies Anime;

export const Frieren: Story = {
  args: { anime: frieren },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(frieren.title.romaji) + "-card"}
        >
          <AnimeCard
            title={frieren.title.romaji}
            titleId={slugify(frieren.title.romaji) + "-card"}
            imageUrl={frieren.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};

// the following are edge cases

// no colors
const monster = {
  id: 19,
  title: {
    romaji: "MONSTER",
  },
  coverImage: {
    color: null,
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-gtMC64182sm4.jpg",
  },
  format: MediaFormat.Tv,
  genres: ["Drama", "Horror", "Mystery", "Psychological", "Thriller"],
  season: MediaSeason.Spring,
  episodes: 74,
  seasonYear: 2004,
  averageScore: 88,
  startDate: {
    // fake just to check consistency
    year: 2021,
  },
  endDate: {
    year: 2021,
  },
  studios: {
    edges: [
      {
        isMain: true,
        node: {
          id: 11,
          name: "MADHOUSE",
        },
      },
      {
        isMain: false,
        node: {
          id: 29,
          name: "VAP",
        },
      },
      {
        isMain: false,
        node: {
          id: 119,
          name: "Viz Media",
        },
      },
      {
        isMain: false,
        node: {
          id: 6620,
          name: "Nippon Television Network",
        },
      },
    ],
  },
} satisfies Anime;

export const Monster: Story = {
  args: { anime: monster },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(monster.title.romaji) + "-card"}
        >
          <AnimeCard
            title={monster.title.romaji}
            titleId={slugify(monster.title.romaji) + "-card"}
            imageUrl={monster.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};

// no season, no colors
const shiguang = {
  id: 126403,
  title: {
    romaji: "Shiguang Dailiren",
  },
  coverImage: {
    color: null,
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126403-BfVSRzWUtVFW.png",
  },
  format: MediaFormat.Ona,
  genres: ["Drama", "Mystery", "Supernatural", "Thriller"],
  season: null,
  episodes: 11,
  seasonYear: null,
  averageScore: 86,
  startDate: {
    year: 2021,
  },
  endDate: {
    year: 2021,
  },
  studios: {
    edges: [
      {
        isMain: false,
        node: {
          id: 6655,
          name: "BeDream",
        },
      },
      {
        isMain: true,
        node: {
          id: 6391,
          name: "Studio LAN",
        },
      },
      {
        isMain: false,
        node: {
          id: 6389,
          name: "bilibili",
        },
      },
      {
        isMain: false,
        node: {
          id: 17,
          name: "Aniplex",
        },
      },
      {
        isMain: false,
        node: {
          id: 6758,
          name: "Sony Music Solutions",
        },
      },
    ],
  },
} satisfies Anime;

export const Shiguang: Story = {
  args: { anime: shiguang },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(shiguang.title.romaji) + "-card"}
        >
          <AnimeCard
            title={shiguang.title.romaji}
            titleId={slugify(shiguang.title.romaji) + "-card"}
            imageUrl={shiguang.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};

// movie, almost empty
const monsterGeneration = {
  id: 103394,
  title: {
    romaji: "MONSTER GENERATiON",
  },
  coverImage: {
    color: "#5daee4",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx103394-Br73jOhsAiYl.jpg",
  },
  format: MediaFormat.Music,
  genres: [],
  season: null,
  episodes: 1,
  seasonYear: null,
  averageScore: 59,
  startDate: {
    year: 2015,
  },
  studios: {
    edges: [
      {
        isMain: true,
        node: {
          id: 951,
          name: "NAZ",
        },
      },
      {
        isMain: false,
        node: {
          id: 7299,
          name: "Bandai Namco Online",
        },
      },
      {
        isMain: false,
        node: {
          id: 7609,
          name: "geechs",
        },
      },
      {
        isMain: false,
        node: {
          id: 104,
          name: "Lantis",
        },
      },
    ],
  },
} satisfies Anime;

export const MonsterGeneration: Story = {
  args: { anime: monsterGeneration },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(monsterGeneration.title.romaji) + "-card"}
        >
          <AnimeCard
            title={monsterGeneration.title.romaji}
            titleId={slugify(monsterGeneration.title.romaji) + "-card"}
            imageUrl={monsterGeneration.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};

// future anime/not aired yet
const toumei = {
  id: 185039,
  title: {
    romaji: "Toumei Otoko to Ningen Onna: Sonouchi Fuufu ni Naru Futari",
  },
  coverImage: {
    color: "#e4bba1",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx185039-n2U1KJsInPmT.jpg",
  },
  startDate: {
    year: 2026,
  },
  endDate: {
    year: null,
  },
  format: MediaFormat.Tv,
  genres: ["Comedy", "Romance", "Supernatural"],
  season: null,
  episodes: null,
  seasonYear: null,
  averageScore: null,
  studios: {
    edges: [
      {
        isMain: true,
        node: {
          id: 4399,
          name: "project No.9",
        },
      },
    ],
  },
} satisfies Anime;

export const Toumei: Story = {
  args: { anime: toumei },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(toumei.title.romaji) + "-card"}
        >
          <AnimeCard
            title={toumei.title.romaji}
            titleId={slugify(toumei.title.romaji) + "-card"}
            imageUrl={toumei.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};

// movies show duration instead of episodes
const garupan = {
  id: 18617,
  title: {
    romaji: "Girls und Panzer Movie",
  },
  coverImage: {
    color: "#e4935d",
    large:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx18617-bzfsyLDahhm8.jpg",
  },
  startDate: {
    year: 2015,
  },
  endDate: {
    year: 2015,
  },
  format: MediaFormat.Movie,
  genres: ["Action", "Sports"],
  season: MediaSeason.Fall,
  episodes: 1,
  duration: 120,
  seasonYear: 2015,
  averageScore: 81,
  studios: {
    edges: [
      {
        isMain: true,
        node: {
          id: 60,
          name: "Actas",
        },
      },
      {
        isMain: false,
        node: {
          id: 6297,
          name: "Q-Tec",
        },
      },
      {
        isMain: false,
        node: {
          id: 166,
          name: "Movic",
        },
      },
      {
        isMain: false,
        node: {
          id: 777,
          name: "Hakuhodo DY Music & Pictures",
        },
      },
      {
        isMain: false,
        node: {
          id: 104,
          name: "Lantis",
        },
      },
      {
        isMain: false,
        node: {
          id: 376,
          name: "Sentai Filmworks",
        },
      },
      {
        isMain: false,
        node: {
          id: 23,
          name: "Bandai Visual",
        },
      },
    ],
  },
} satisfies Anime;

export const Garupan: Story = {
  args: { anime: garupan },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[381px]">
        <InfoPreview
          {...args}
          aria-labelledby={slugify(garupan.title.romaji) + "-card"}
        >
          <AnimeCard
            title={garupan.title.romaji}
            titleId={slugify(garupan.title.romaji) + "-card"}
            imageUrl={garupan.coverImage.large}
          />
        </InfoPreview>
      </div>
    </div>
  ),
};
