import { Suspense } from "react";
import { loadAnime } from "@/app/lib/server-fetchers";

import RelationCard from "@/app/ui/relation-card";
import CharacterCard from "@/app/ui/character-card";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Overview = ({ params }: Props) => (
  <div className="space-y-5">
    <Suspense fallback={<div>Loading relations...</div>}>
      <Relations params={params} />
    </Suspense>

    <Suspense fallback={<div>Loading characters...</div>}>
      <Characters params={params} />
    </Suspense>
  </div>
);

const Relations = async ({ params }: Props) => {
  const id = Number((await params).id);
  const relations = (await loadAnime(id))?.anime?.relations;

  if (!relations?.edges?.length) {
    return;
  }

  return (
    <section className="space-y-2.5">
      <h2 className="text-sm leading-4 font-medium">Relations</h2>

      <div className="flex flex-wrap gap-5">
        {relations?.edges?.map((relation) => (
          <RelationCard key={relation?.id} relation={relation} />
        ))}
      </div>
    </section>
  );
};

const Characters = async ({ params }: Props) => {
  const id = Number((await params).id);
  const characters = (await loadAnime(id))?.anime?.characters?.edges;

  if (!characters?.length) {
    return;
  }

  return (
    <section className="space-y-2.5">
      <h2 className="text-sm leading-4 font-medium">Characters</h2>

      <div className="grid gap-x-[1.875rem] gap-y-[0.9375rem] lg:grid-cols-2 xl:grid-cols-3">
        {characters.map((character) => (
          <CharacterCard
            key={character?.id}
            role={character?.role}
            character={character?.node}
            voiceActor={character?.voiceActors?.[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default Overview;
