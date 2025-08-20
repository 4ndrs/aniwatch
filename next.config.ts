import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [new URL("https://s4.anilist.co/**")],
  },
  experimental: {
    scrollRestoration: false,
  },
  typedRoutes: true,
};

export default nextConfig;
