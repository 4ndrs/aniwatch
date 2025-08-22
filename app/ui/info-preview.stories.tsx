import AnimeCard from "@/app/ui/anime-card";
import InfoPreview from "@/app/ui/info-preview";

import { slugify } from "@/app/ui/utils";
import { MediaFormat, MediaSeason } from "@/app/gql/sdk";

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

type Anime = React.ComponentProps<typeof InfoPreview>["anime"];

const color = "#bbf1a1";
const title = "Sousou no Frieren";

const frieren = {
  format: MediaFormat.Tv,
  genres: ["Adventure", "Drama", "Fantasy"],
  season: MediaSeason.Fall,
  episodes: 28,
  seasonYear: 2023,
  averageScore: 91,
  coverImage: {
    color,
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
        <InfoPreview {...args} aria-labelledby={slugify(title) + "-card"}>
          <AnimeCard
            title="Sousou no Frieren"
            color={color}
            titleId={slugify(title) + "-card"}
            imageUrl="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg"
          />
        </InfoPreview>
      </div>
    </div>
  ),
};
