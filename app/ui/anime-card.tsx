import Image from "next/image";

type Props = {
  url?: string | null;
  title?: string | null;
  color?: string | null;
};

const AnimeCard = ({ url, title, color }: Props) => (
  <article
    style={
      {
        "--anime-color": color,
      } as React.CSSProperties
    }
    className="group flex size-fit flex-col gap-2.5"
  >
    <div className="relative flex h-[265px] w-[185px] items-center justify-center overflow-hidden rounded-sm bg-gray-800">
      {url ? (
        <Image
          fill
          src={url}
          alt={title ? "Cover of " + title : "Anime Cover"}
          className="object-cover"
        />
      ) : (
        <span className="text-xl font-bold text-gray-600">No Image</span>
      )}
    </div>
    <h2 className="line-clamp-2 w-[185px] text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--anime-color)]">
      {title ?? "No Title"}
    </h2>
  </article>
);

export default AnimeCard;
