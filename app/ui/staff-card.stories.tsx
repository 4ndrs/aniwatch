import StaffCard, { StaffCardSkeleton } from "@/app/ui/staff-card";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: StaffCard,
} satisfies Meta<typeof StaffCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultWithSkeleton: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
  ),
};

export const YamadaKanehitoWithSkeleton: Story = {
  args: {
    staff: {
      id: 612615,
      role: "Original Story",
      node: {
        name: {
          last: "Yamada",
          first: "Kanehito",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n122202-lxoDudr9vaul.jpg",
        },
      },
    },
  },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
  ),
};

export const AbeTsukasaWithSkeleton: Story = {
  args: {
    staff: {
      id: 612616,
      role: "Original Character Design",
      node: {
        name: {
          last: "Abe",
          first: "Tsukasa",
        },
        image: {
          large:
            "https://s4.anilist.co/file/anilistcdn/staff/large/n170189-HOqnSDEYpFKZ.jpg",
        },
      },
    },
  },
  render: (args) => (
    <div className="flex gap-2">
      <div className="w-[337.33px]">
        <StaffCard {...args} />
      </div>
      <div className="w-[337.33px]">
        <StaffCardSkeleton />
      </div>
    </div>
  ),
};
