import YearComboBox from "@/app/ui/year-combo-box";
import FieldSkeleton from "@/app/ui/field-skeleton";

import { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: YearComboBox,
} satisfies Meta<typeof YearComboBox>;

type Story = StoryObj<typeof meta>;

export default meta;

const data = { min: 1974, max: 2025 };

const promise = new Promise<{ min: number; max: number }>((resolve) =>
  setTimeout(() => resolve(data), 8000),
);

export const Default: Story = {
  args: {
    promise,
    "aria-labelledby": "year-label",
  },
  render: (args) => (
    <NuqsAdapter>
      <div className="w-40">
        <label id="year-label">Year</label>

        <Suspense fallback=<FieldSkeleton />>
          <YearComboBox {...args} />
        </Suspense>
      </div>
    </NuqsAdapter>
  ),
};

export const DefaultAndSkeleton: Story = {
  args: {
    promise: Promise.resolve(data),
    "aria-labelledby": "year-label",
  },
  render: (args) => (
    <NuqsAdapter>
      <div className="flex w-96 gap-2">
        <div className="w-40">
          <label id="year-label">Year</label>

          <Suspense fallback=<FieldSkeleton />>
            <YearComboBox {...args} />
          </Suspense>
        </div>

        <div className="w-40">
          <label id="year-label">Year</label>
          <FieldSkeleton />
        </div>
      </div>
    </NuqsAdapter>
  ),
};
