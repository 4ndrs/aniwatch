import CharacterCard from "@/app/ui/character-card";

import { CharacterRole } from "@/app/gql/graphql";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: CharacterCard,
} satisfies Meta<typeof CharacterCard>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},
};

export const Frieren: Story = {
  args: {
    role: CharacterRole.Main,
    character: {
      name: {
        first: "Frieren",
        last: null,
      },
      image: {
        large:
          "https://s4.anilist.co/file/anilistcdn/character/large/b176754-PCnpqIOkjhFk.png",
      },
    },
    voiceActor: {
      name: {
        last: "Tanezaki",
        first: "Atsumi",
      },
      image: {
        large:
          "https://s4.anilist.co/file/anilistcdn/staff/large/n112215-kfABGD8W2YSJ.jpg",
      },
    },
  },
  render: (args) => (
    <div className="w-[337.33px]">
      <CharacterCard {...args} />
    </div>
  ),
};

export const Fern: Story = {
  args: {
    role: CharacterRole.Main,
    character: {
      name: {
        first: "Fern",
        last: null,
      },
      image: {
        large:
          "https://s4.anilist.co/file/anilistcdn/character/large/b183965-uGFohBjlFoTp.png",
      },
    },
    voiceActor: {
      name: {
        last: "Ichinose",
        first: "Kana",
      },
      image: {
        large:
          "https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png",
      },
    },
  },
  render: (args) => (
    <div className="w-[337.33px]">
      <CharacterCard {...args} />
    </div>
  ),
};
