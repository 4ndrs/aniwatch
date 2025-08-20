import Cover, { CoverSkeleton } from "@/app/ui/cover";

import { type AnimeQuery, MediaRelation } from "@/app/gql/sdk";
import { MediaFormatDisplayMap, MediaStatusDisplayMap } from "@/app/ui/utils";

export type Relation = NonNullable<
  NonNullable<NonNullable<AnimeQuery["Media"]>["relations"]>["edges"]
>[number];

type Props = {
  relation?: Relation;
};

const RelationCard = ({ relation }: Props) => {
  if (!relation?.node) {
    return;
  }

  const status = relation.node.status;
  const mediaFormat = relation.node.format;
  const relationType = relation.relationType;

  const mediaRelationText =
    relationType && MediaRelationDisplayMap[relationType];

  const formatAndStatusText =
    status && mediaFormat
      ? MediaFormatDisplayMap[mediaFormat] +
        " · " +
        MediaStatusDisplayMap[status]
      : status
        ? MediaStatusDisplayMap[status]
        : mediaFormat
          ? MediaFormatDisplayMap[mediaFormat]
          : undefined;

  return (
    <article className="group relative size-fit">
      <div className="relative overflow-hidden rounded-[3px] group-hover:rounded-r-none">
        <Cover
          size="md"
          src={relation?.node?.coverImage?.medium}
          alt={
            relation?.node?.title?.romaji &&
            "Cover of " + relation?.node?.title?.romaji
          }
        />

        {relationType && (
          <p className="absolute inset-x-0 bottom-0 bg-[rgba(31,38,49,.7)] py-2.5 text-center text-xs leading-[0.8625rem] text-white transition-opacity duration-300 group-hover:opacity-0">
            {mediaRelationText}
          </p>
        )}
      </div>

      <div className="bg-foreground-sp pointer-events-none absolute inset-y-0 right-0 z-[1] flex w-60 translate-x-full flex-col rounded-r-[3px] p-3 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 hover:pointer-events-none hover:opacity-0">
        <p className="text-blue mb-2 text-xs leading-[0.8625rem] font-medium">
          {mediaRelationText}
        </p>

        <h3 className="text-text text-sm leading-[1rem]">
          {relation.node.title?.romaji}
        </h3>

        <p className="text-text-lighter mt-auto mb-0 text-xs leading-[0.8625rem]">
          {formatAndStatusText}
        </p>
      </div>
    </article>
  );
};

export const RelationCardSkeleton = () => (
  <CoverSkeleton size="md" className="rounded-[3px]" />
);

// in the query (@/app/queries/anime.graphql) version 2 is being
// requested via parameters so that we have the source definition
// version 1 shows frieren's source as adaptation version 2 as source
const MediaRelationDisplayMap: Record<MediaRelation, string> = {
  [MediaRelation.Other]: "Other",
  [MediaRelation.Parent]: "Parent",
  [MediaRelation.Sequel]: "Sequel",
  [MediaRelation.Source]: "Source",
  [MediaRelation.Prequel]: "Prequel",
  [MediaRelation.SpinOff]: "Spin Off",
  [MediaRelation.Summary]: "Summary",
  [MediaRelation.Contains]: "Contains",
  [MediaRelation.SideStory]: "Side Story",
  [MediaRelation.Character]: "Character",
  [MediaRelation.Adaptation]: "Adaptation",
  [MediaRelation.Alternative]: "Alternative",
  [MediaRelation.Compilation]: "Compilation",
};

export default RelationCard;
