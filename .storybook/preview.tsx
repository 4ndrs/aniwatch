import React from "react";

import { Overpass } from "next/font/google";

import "../app/ui/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={overpass.className}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
