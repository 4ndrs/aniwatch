import Cover from "@/app/ui/cover";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: Cover,
} satisfies Meta<typeof Cover>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultSM: Story = {
  args: {
    size: "sm",
  },
};

export const DefaultMD: Story = {
  args: {
    size: "md",
  },
};

export const DefaultLG: Story = {
  args: {
    size: "lg",
  },
};

export const DefaultXL: Story = {
  args: {
    size: "xl",
  },
};

export const FrierenLGRoundedSM: Story = {
  args: {
    src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    alt: "Cover of Sousou no Frieren",
    size: "lg",
    className: "rounded-sm",
  },
};

export const FrierenXLRoundedXS: Story = {
  args: {
    src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    alt: "Cover of Sousou no Frieren",
    size: "xl",
    className: "rounded-xs",
  },
};
