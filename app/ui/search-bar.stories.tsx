import SearchBar from "@/app/ui/search-bar";

import { NuqsAdapter } from "nuqs/adapters/react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: SearchBar,
} satisfies Meta<typeof SearchBar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
  render: (args) => (
    <NuqsAdapter>
      <div className="flex gap-2">
        <div className="w-[381px]">
          <SearchBar {...args} />
        </div>
      </div>
    </NuqsAdapter>
  ),
};
