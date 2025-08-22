import Skeleton from "@/app/ui/skeleton";
import Cover, { CoverSkeleton } from "@/app/ui/cover";

import { sizes } from "@/app/ui/utils";

type Props = {
  size?: keyof typeof sizes;
  title?: string | null;
  color?: string | null;
  titleId?: string;
  imageUrl?: string | null;
};

const AnimeCard = ({ titleId, imageUrl, title, color, size = "lg" }: Props) => (
  <article
    style={
      {
        width: sizes[size].width,
        "--anime-color": color,
      } as React.CSSProperties
    }
    className="group flex size-fit flex-col gap-2.5"
  >
    <Cover src={imageUrl} alt={title} size={size} className="rounded-sm" />

    <h2
      id={titleId}
      className="line-clamp-2 w-[185px] max-w-full font-(family-name:--font-overpass) text-sm font-semibold text-wrap transition-colors duration-200 group-hover:text-[var(--anime-color)]"
    >
      {title ?? "No Title"}
    </h2>
  </article>
);

export const AnimeCardSkeleton = ({ size = "lg" }: Pick<Props, "size">) => (
  <div className="flex size-fit flex-col gap-2.5">
    <CoverSkeleton size={size} className="rounded-sm" />

    <Skeleton className="line-clamp-2 max-w-full font-(family-name:--font-overpass) text-sm font-semibold text-wrap">
      Sousou no Frieren
    </Skeleton>
  </div>
);

export default AnimeCard;
