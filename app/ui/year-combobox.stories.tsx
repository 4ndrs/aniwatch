import YearComboBox from "@/app/ui/year-combo-box";

import { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/react";

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

export const Default: Story = {
  args: {
    promise,
    "aria-labelledby": "year-label",
  },
  render: (args) => (
    <NuqsAdapter>
      <Suspense fallback="loading...">
        <div className="w-40">
          <label id="year-label">Year</label>
          <YearComboBox {...args} />
        </div>
      </Suspense>
    </NuqsAdapter>
  ),
};
