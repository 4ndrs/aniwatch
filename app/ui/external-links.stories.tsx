import ExternalLinks, {
  type Links,
  ExternalLinksSkeleton,
} from "@/app/ui/external-links";

import { sizes } from "@/app/ui/utils";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  tags: ["autodocs"],
  component: ExternalLinks,
} satisfies Meta<typeof ExternalLinks>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {},

  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <ExternalLinks {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <ExternalLinksSkeleton />
      </div>
    </div>
  ),
};

const kusuriya = [
  {
    icon: null,
    color: null,
    language: "Japanese",
    site: "Official Site",
    url: "https://kusuriyanohitorigoto.jp/season2/",
    id: 89524,
  },
  {
    icon: "https://s4.anilist.co/file/anilistcdn/link/icon/17-R0tMgOvwvhsS.png",
    color: "#000000",
    language: "Japanese",
    site: "Twitter",
    url: "https://twitter.com/kusuriya_PR",
    id: 89528,
  },
  {
    icon: "https://s4.anilist.co/file/anilistcdn/link/icon/5-AWN2pVlluCOO.png",
    color: "#F88B24",
    language: null,
    site: "Crunchyroll",
    url: "https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries",
    id: 94813,
  },
  {
    icon: "https://s4.anilist.co/file/anilistcdn/link/icon/196-o2g5cLUG6k5V.png",
    color: "#010101",
    language: "Japanese",
    site: "TikTok",
    url: "https://www.tiktok.com/@kusuriya_pr",
    id: 105922,
  },
  {
    icon: "https://s4.anilist.co/file/anilistcdn/link/icon/10-rVGPom8RCiwH.png",
    color: "#E50914",
    language: null,
    site: "Netflix",
    url: "https://www.netflix.com/title/81712068",
    id: 114583,
  },
] satisfies Links;

export const Kusuriya: Story = {
  args: {
    links: kusuriya,
  },

  render: (args) => (
    <div className="flex gap-2">
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <ExternalLinks {...args} />
      </div>
      <div
        style={{
          width: sizes.xl.width,
        }}
      >
        <ExternalLinksSkeleton />
      </div>
    </div>
  ),
};
