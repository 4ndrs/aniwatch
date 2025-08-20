import Cover, { CoverSkeleton } from "@/app/ui/cover";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: Cover,
} satisfies Meta<typeof Cover>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultProfileWithSkeleton: Story = {
  args: {
    size: "profile",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultXSWithSkeleton: Story = {
  args: {
    size: "xs",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultSMWithSkeleton: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultMDWithSkeleton: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultXMWithSkeleton: Story = {
  args: {
    size: "xm",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultLGWithSkeleton: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const DefaultXLWithSkeleton: Story = {
  args: {
    size: "xl",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const FrierenLGRoundedSMWithSkeleton: Story = {
  args: {
    src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    alt: "Cover of Sousou no Frieren",
    size: "lg",
    className: "rounded-sm",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};

export const FrierenXLRoundedXSWithSkeleton: Story = {
  args: {
    src: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg",
    alt: "Cover of Sousou no Frieren",
    size: "xl",
    className: "rounded-xs",
  },
  render: (args) => (
    <div className="flex gap-4">
      <Cover {...args} />
      <CoverSkeleton {...args} />
    </div>
  ),
};
