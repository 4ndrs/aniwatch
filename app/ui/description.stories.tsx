import Description, { DescriptionSkeleton } from "@/app/ui/description";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: Description,
} satisfies Meta<typeof Description>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultAndSkeleton: Story = {
  args: {},
  render: (args) => (
    <div className="grid grid-cols-2 gap-2">
      <Description {...args} />
      <DescriptionSkeleton />
    </div>
  ),
};

export const FrierenAndSkeleton: Story = {
  args: {
    title: "Sousou no Frieren",
    description:
      "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…\n<br><br>\n(Source: Crunchyroll)",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-2">
      <Description {...args} />
      <DescriptionSkeleton />
    </div>
  ),
};

export const KaguyaAndSkeleton: Story = {
  args: {
    title: "Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai",
    description:
      "Shuchiin Academy’s student council room: the place where Student Council Vice President Kaguya Shinomiya and President Miyuki Shirogane met. After a long battle in love, these two geniuses communicated their feelings and, at the Hoshin Festival, had their very first kiss. However, there was no clear confession of love. The relationship between these two, who assumed they would be a couple, remains ambiguous. Now, overly conscious of their feelings, they must face the biggest challenge yet: Christmas. It’s Shirogane who wants it to be perfect versus Kaguya who pursues the imperfect situation. This is the very “normal” love story of two geniuses and the first kiss that never ends.\n<br><br>\n(Source: Aniplex of America)\n<br><br>\n<em>Note: The anime first premiered in theaters across Japan on December 17, 2022. It was later split into 2 parts on TV, and 4 episodes on streaming, and Blu-Ray/DVD.</em>",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-2">
      <Description {...args} />
      <DescriptionSkeleton />
    </div>
  ),
};
