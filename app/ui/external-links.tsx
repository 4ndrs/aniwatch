import type { AnimeQuery } from "@/app/gql/sdk";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

export type Links = NonNullable<AnimeQuery["Media"]>["externalLinks"];

type Props = {
  links?: Links;
};

const ExternalLinks = ({ links }: Props) => {
  if (!links || links.length === 0) {
    return;
  }

  return (
    <section>
      <h2 className="text-text mb-2.5 text-sm leading-4 font-medium">
        External & Streaming Links
      </h2>

      <ul className="flex flex-col gap-2.5">
        {links
          .filter((link) => !!link)
          .map((link) => (
            <li
              key={link.id}
              style={{ "--link-color": link.color } as React.CSSProperties}
            >
              <a
                href={link.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                data-highlight={link.icon ? true : undefined}
                className="bg-foreground-sp group flex items-center gap-3 rounded-[5px] p-1 transition-colors data-[highlight]:hover:bg-[var(--link-color)]/88"
              >
                {link.icon ? (
                  <div className="rounded-[3px] bg-[var(--link-color)] p-1">
                    <Image
                      width={16}
                      height={16}
                      src={link.icon}
                      alt={`${link.site} icon`}
                    />
                  </div>
                ) : (
                  <NoIcon />
                )}

                <span className="text-text group-hover:text-blue font-(family-name:--font-overpass) text-[0.8125rem] leading-[0.8125rem] font-bold transition-colors group-hover:group-data-[highlight]:text-white">
                  {link.site}
                </span>
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
};

const NoIcon = () => (
  <div className="rounded-[3px] bg-[rgb(12,101,166)] p-[0.3125rem]">
    <FaLink className="size-3.5 text-white" />
  </div>
);

export default ExternalLinks;
