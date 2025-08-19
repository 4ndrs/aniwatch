import { sdk } from "@/app/lib/anilist";
import { unstable_cache } from "next/cache";

import "server-only";

export const loadAnime = unstable_cache(
  async (id: number) => {
    try {
      const anime = (await sdk.Anime({ id })).Media;

      if (!anime) {
        throw new Error("Anime not found");
      }

      return { anime, error: false } as const;
    } catch (error) {
      console.error(`Error loading anime with id ${id}:`, error);
      return { error: true } as const;
    }
  },
  undefined,
  { revalidate: 86400 }, // Cache for 24 hours
);
