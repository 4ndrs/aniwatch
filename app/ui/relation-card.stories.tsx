import RelationCard, {
  type Relation,
  RelationCardSkeleton,
} from "@/app/ui/relation-card";

import { MediaFormat, MediaStatus, MediaRelation } from "@/app/gql/sdk";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: RelationCard,
} satisfies Meta<typeof RelationCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultWithSkeleton: Story = {
  args: {},
  render: (args) => (
    <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
  ),
};

const sourceRelation = {
  relationType: MediaRelation.Source,
  node: {
    title: {
      romaji: "Sousou no Frieren",
    },
    coverImage: {
      medium:
        "https://s4.anilist.co/file/anilistcdn/media/manga/cover/small/bx118586-CXKgWikBFQgS.jpg",
    },
    format: MediaFormat.Manga,
    status: MediaStatus.Releasing,
  },
} satisfies Relation;

export const SourceRelationWithSkeleton: Story = {
  args: {
    relation: sourceRelation,
  },
  render: (args) => (
    <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
  ),
};

const sideStoryRelation = {
  relationType: MediaRelation.SideStory,
  node: {
    title: {
      romaji: "Sousou no Frieren: ●● no Mahou Part 2",
    },
    coverImage: {
      medium:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx170068-ijY3tCP8KoWP.jpg",
    },
    format: MediaFormat.Ona,
    status: MediaStatus.Releasing,
  },
} satisfies Relation;

export const SideStoryRelationWithSkeleton: Story = {
  args: {
    relation: sideStoryRelation,
  },
  render: (args) => (
    <div className="flex gap-4">
      <RelationCard {...args} />
      <RelationCardSkeleton />
    </div>
  ),
};
