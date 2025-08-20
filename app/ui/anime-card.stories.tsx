import AnimeCard from "@/app/ui/anime-card";

import { AnimeCardSkeleton } from "@/app/ui/anime-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: AnimeCard,
} satisfies Meta<typeof AnimeCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultWithSkeleton: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
  ),
};

export const FrierenAndSkeleton: Story = {
  args: {
    title: "Sousou no Frieren",
    color: "hsl(129, 80%, 70%)",
    imageUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
  },
  render: (args) => (
    <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
  ),
};

export const KaguyaAndSkeleton: Story = {
  args: {
    title: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
    color: "rgb(227, 79, 133)",
    imageUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151384-gv0q8wOE6D58.jpg",
  },
  render: (args) => (
    <div className="flex gap-4">
      <AnimeCard {...args} />
      <AnimeCardSkeleton />
    </div>
  ),
};
