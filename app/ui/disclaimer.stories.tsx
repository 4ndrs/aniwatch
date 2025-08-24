import Disclaimer from "@/app/ui/disclaimer";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: Disclaimer,
} satisfies Meta<typeof Disclaimer>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <div className="h-[28rem] w-[381px]">
        <Disclaimer {...args} />
      </div>
    </div>
  ),
};
