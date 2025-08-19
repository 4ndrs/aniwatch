import Image from "next/image";

import { sizes } from "@/app/ui/utils";
import { twMerge } from "tailwind-merge";

type Props = {
  src?: string | null;
  alt?: string | null;
  size?: keyof typeof sizes;
  className?: string;
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
      <span className="text-center font-(family-name:--font-overpass) text-xl font-bold text-gray-600 group-data-[size=md]:text-sm group-data-[size=sm]:text-center group-data-[size=sm]:text-sm group-data-[size=xl]:text-3xl group-data-[size=xs]:text-xs">
        No Image
      </span>
    )}
  </div>
);
export default Cover;
