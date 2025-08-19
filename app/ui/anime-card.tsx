import Cover from "@/app/ui/cover";

import { sizes } from "@/app/ui/utils";

type Props = {
  title?: string | null;
  color?: string | null;
  size?: keyof typeof sizes;
  imageUrl?: string | null;
};

const AnimeCard = ({ imageUrl, title, color, size = "lg" }: Props) => (
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

    <h2 className="line-clamp-2 w-[185px] max-w-full font-(family-name:--font-overpass) text-sm font-semibold text-wrap transition-colors duration-200 group-hover:text-[var(--anime-color)]">
      {title ?? "No Title"}
    </h2>
  </article>
);

export default AnimeCard;
