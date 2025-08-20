import React from "react";

import { Roboto, Overpass } from "next/font/google";

import "../app/ui/globals.css";

import type { Preview } from "@storybook/nextjs-vite";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <div
        className={`${roboto.variable} ${overpass.variable} font-(family-name:--font-roboto) antialiased`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
