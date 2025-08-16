import Image from "next/image";

import { twMerge } from "tailwind-merge";

type Props = {
  src?: string | null;
  alt?: string | null;
  size?: keyof typeof sizes;
  className?: string;
};

const sizes = {
  sm: {
    width: "52px",
    height: "70px",
  },
  md: {
    width: "85px",
    height: "115px",
  },
  lg: {
    width: "185px",
    height: "265px",
  },
  xl: {
    width: "215px",
    height: "303px",
  },
};

const Cover = ({ src, alt, size = "sm", className }: Props) => (
  <div
    data-size={size}
    style={{
      width: sizes[size].width,
      height: sizes[size].height,
    }}
    className={twMerge(
      "group relative flex items-center justify-center overflow-hidden bg-gray-800",
      className,
    )}
  >
    {src ? (
      <Image
        fill
        src={src}
        alt={alt ?? "cover image"}
        className="object-cover"
      />
    ) : (
      <span className="font-overpass text-xl font-bold text-gray-600 group-data-[size=md]:text-sm group-data-[size=sm]:text-center group-data-[size=sm]:text-xs group-data-[size=xl]:text-3xl">
        No Image
      </span>
    )}
  </div>
);
export default Cover;
