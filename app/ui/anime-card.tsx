import Cover from "@/app/ui/cover";

type Props = {
  title?: string | null;
  color?: string | null;
  imageUrl?: string | null;
};

const AnimeCard = ({ imageUrl, title, color }: Props) => (
  <article
    style={
      {
        "--anime-color": color,
      } as React.CSSProperties
    }
    className="group flex size-fit flex-col gap-2.5"
  >
    <Cover src={imageUrl} alt={title} size="lg" className="rounded-sm" />

    <h2 className="line-clamp-2 w-[185px] font-(family-name:--font-overpass) text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--anime-color)]">
      {title ?? "No Title"}
    </h2>
  </article>
);

export default AnimeCard;
