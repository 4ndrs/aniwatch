import { MediaFormat, MediaStatus } from "@/app/gql/sdk";

export const sizes = {
  profile: {
    width: "50px",
    height: "50px",
  },
  xs: {
    width: "52px",
    height: "70px",
  },
  sm: {
    width: "60px",
    height: "80px",
  },
  md: {
    width: "85px",
    height: "115px",
  },
  xm: {
    width: "130px",
    height: "180px",
  },
  lg: {
    width: "185px",
    height: "265px",
  },
  xl: {
    width: "215px",
    height: "303px",
  },
} as const;

export const MediaFormatDisplayMap: Record<MediaFormat, string> = {
  [MediaFormat.Tv]: "TV",
  [MediaFormat.Movie]: "Movie",
  [MediaFormat.Ova]: "OVA",
  [MediaFormat.Ona]: "ONA",
  [MediaFormat.Special]: "Special",
  [MediaFormat.Music]: "Music",
  [MediaFormat.TvShort]: "TV Short",
  [MediaFormat.Manga]: "Manga",
  [MediaFormat.OneShot]: "One Shot",
  [MediaFormat.Novel]: "Novel",
};

export const MediaStatusDisplayMap: Record<MediaStatus, string> = {
  [MediaStatus.Hiatus]: "Hiatus",
  [MediaStatus.Finished]: "Finished",
  [MediaStatus.Releasing]: "Releasing",
  [MediaStatus.Cancelled]: "Other",
  [MediaStatus.NotYetReleased]: "Not Yet Released",
};
