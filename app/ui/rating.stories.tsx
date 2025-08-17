import Rating from "@/app/ui/rating";

import { sizes } from "./utils";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: Rating,
} satisfies Meta<typeof Rating>;

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
      <Rating {...args} />
    </div>
  ),
};

export const HighestRated: Story = {
  args: {
    rank: 1,
    context: "highest rated all time",
  },

  render: (args) => (
    <div
      style={{
        width: sizes.xl.width,
      }}
    >
      <Rating {...args} />
    </div>
  ),
};
