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
    className="group flex size-fit flex-col gap-2.5"
  >
    {url ? (
      <Image
        src={url ?? ""}
        alt={title ?? "Anime Cover"}
        width={185}
        height={265}
        className="rounded-sm"
      />
    ) : (
      <div className="flex h-[265px] w-[185px] items-center justify-center rounded-sm bg-gray-800">
        <span className="text-xl font-bold text-gray-600">No Image</span>
      </div>
    )}
    <h2 className="line-clamp-2 w-[185px] text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--anime-color)]">
      {title ?? "No Title"}
    </h2>
  </article>
);

export default AnimeCard;
