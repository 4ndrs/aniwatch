"use cache";

import { sdk } from "@/app/lib/anilist";
import { cacheLife } from "next/cache";

import "server-only";

const REVALIDATE_TIME = 60 * 60 * 24; // 24 hours

export const loadAnime = async (id: number) => {
  cacheLife({ revalidate: REVALIDATE_TIME });

  try {
    console.log("querying anime with id: ", id);

    const anime = (await sdk.Anime({ id })).Media;

    if (!anime) {
      throw new Error("Anime not found");
    }

    return { anime, error: false } as const;
  } catch (error) {
    console.error(`Error loading anime with id ${id}:`, error);
    return { error: true } as const;
  }
};

export const getMinMaxDates = async () => {
  cacheLife({ revalidate: REVALIDATE_TIME });

  console.log("querying min/max dates");

  const defaultMin = 1940;
  const defaultMax = new Date().getFullYear() + 1;

  try {
    const { min: rawMin, max: rawMax } = await sdk.YearBounds();

    const min = rawMin?.startDate?.year ?? defaultMin;
    const max = rawMax?.startDate?.year ?? defaultMax;

    return { min, max };
  } catch (error) {
    console.error(
      "Error getting min/max year bounds:\n\n",
      error,
      `\n\nreturning default values min: ${defaultMin}, max: ${defaultMax}`,
    );

    return { min: defaultMin, max: defaultMax };
  }
};
