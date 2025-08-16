import Image from "next/image";

type Props = {
  url?: string;
  title?: string;
  color?: string;
};

const AnimeCard = ({ url, title, color }: Props) => (
  <article
    style={
      {
        "--anime-color": color,
      } as React.CSSProperties
    }
    className="group flex flex-col gap-2.5"
  >
    <Image
      src={url ?? ""}
      alt={title ?? "Anime Cover"}
      width={185}
      height={265}
      className="rounded-sm"
    />
    <h2 className="[font-family:var(--font-overpass)] text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--anime-color)]">
      {title ?? "No Title"}
    </h2>
  </article>
);

export default AnimeCard;
