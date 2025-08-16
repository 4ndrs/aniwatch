import AnimeCard from "@/app/ui/anime-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: AnimeCard,
} satisfies Meta<typeof AnimeCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};

export const Frieren: Story = {
  args: {
    url: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    title: "Sousou no Frieren",
    color: "hsl(129, 80%, 70%)",
  },
};
