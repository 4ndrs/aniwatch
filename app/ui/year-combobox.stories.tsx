import YearListBox from "@/app/ui/year-combo-box/list-box";
import YearComboBox from "@/app/ui/year-combo-box";

import { Suspense } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: YearComboBox,
} satisfies Meta<typeof YearComboBox>;

type Story = StoryObj<typeof meta>;

export default meta;

const promise = new Promise<{ min: number; max: number }>((resolve) =>
  setTimeout(() => resolve({ min: 1974, max: 2025 }), 8000),
);

const SuspenseTesting = () => (
  <Suspense fallback="loading...">
    <YearListBox promise={promise} />
  </Suspense>
);

export const Default: Story = {
  args: {
    children: <SuspenseTesting />,
    "aria-labelledby": "year-label",
  },
  render: (args) => (
    <div className="w-40">
      <label id="year-label">Year</label>
      <YearComboBox {...args} />
    </div>
  ),
};
