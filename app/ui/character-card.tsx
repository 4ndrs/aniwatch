import Cover from "@/app/ui/cover";

import type { AnimeQuery, CharacterRole } from "@/app/gql/sdk";

type Character = NonNullable<
  NonNullable<
    NonNullable<NonNullable<AnimeQuery["Media"]>["characters"]>["edges"]
  >[number]
>["node"];

type VoiceActor = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<NonNullable<AnimeQuery["Media"]>["characters"]>["edges"]
    >[number]
  >["voiceActors"]
>[number];

type Props = {
  role?: CharacterRole | null;
  character?: Character;
  voiceActor?: VoiceActor;
};

const CharacterCard = ({ role, character, voiceActor }: Props) => {
  if (!character && !voiceActor) {
    return;
  }

  const characterName =
    character?.name?.last && character?.name.first
      ? `${character.name.last} ${character.name.first}`
      : character?.name?.first
        ? character.name.first
        : character?.name?.last
          ? character.name.last
          : undefined;

  const seiyuuName =
    voiceActor?.name?.last && voiceActor?.name.first
      ? `${voiceActor.name.last} ${voiceActor.name.first}`
      : voiceActor?.name?.first
        ? voiceActor.name.first
        : voiceActor?.name?.last
          ? voiceActor.name.last
          : undefined;

  return (
    <article
      aria-labelledby={characterName + "-card-title"}
      className="bg-foreground-sp flex justify-between overflow-hidden rounded-[3px]"
    >
      <div className="flex">
        <Cover
          size="sm"
          src={character?.image?.large}
          alt={characterName && characterName + "'s portrait"}
        />

        <div className="flex flex-col justify-between p-2.5">
          <h3
            id={characterName + "-card-title"}
            className="text-text text-xs leading-[0.975rem]"
          >
            {characterName}
          </h3>

          <span
            aria-label="Role"
            className="text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize"
          >
            {role?.toLowerCase()}
          </span>
        </div>
      </div>

      {voiceActor && (
        <div className="flex text-right">
          <div className="flex flex-col justify-between p-2.5">
            <span
              aria-label="Voice Actor"
              className="text-text text-xs leading-[0.975rem]"
            >
              {seiyuuName || "No Name"}
            </span>

            <span
              aria-label="Language"
              className="text-text-lighter text-[0.6875rem] leading-[0.790625rem] capitalize"
            >
              Japanese
            </span>
          </div>

          <Cover
            size="sm"
            src={voiceActor?.image?.large}
            alt={seiyuuName && seiyuuName + "'s portrait"}
          />
        </div>
      )}
    </article>
  );
};

export default CharacterCard;
