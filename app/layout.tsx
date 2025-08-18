import Providers from "@/app/ui/providers";

import { Overpass, Roboto } from "next/font/google";

import "@/app/ui/globals.css";

import type { Metadata } from "next";

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

const title = "AniWatch";

const description =
  "Site created as learning excercise showcasing anime data using Anilist API. Not meant to be used. For a better experience go to the original site at https://anilist.co.";

export const metadata: Metadata = {
  title: {
    template: "%s · " + title,
    default: title,
  },
  description,
  openGraph: {
    title: {
      template: "%s · " + title,
      default: title,
    },
    description,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${overpass.variable} pb-20 antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
