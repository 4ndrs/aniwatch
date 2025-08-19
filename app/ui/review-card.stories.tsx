import ReviewCard from "@/app/ui/review-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};

export const FrierenReview: Story = {
  args: {
    review: {
      id: 23847,
      summary:
        "Fascinating, fulfilling, and full of feelings—a trek where every step matters.",
      rating: 277,
      user: {
        name: "befalt",
        avatar: {
          medium:
            "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b277712-4a6bAFWMQU5g.png",
        },
      },
    },
  },
  render: (args) => (
    <div className="w-[381px]">
      <ReviewCard {...args} />
    </div>
  ),
};

export const FrierenReview2: Story = {
  args: {
    review: {
      id: 23852,
      summary: "Frieren's wasted potential",
      rating: 59,
      user: {
        name: "Ionliosite2",
        avatar: {
          medium:
            "https://s4.anilist.co/file/anilistcdn/user/avatar/medium/b6294004-rHFvI4sswmSp.jpg",
        },
      },
    },
  },
  render: (args) => (
    <div className="w-[381px]">
      <ReviewCard {...args} />
    </div>
  ),
};
