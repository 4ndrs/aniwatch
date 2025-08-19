import { Suspense } from "react";
import { loadAnime } from "@/app/lib/server-fetchers";

import AnimeCard from "@/app/ui/anime-card";
import StaffCard from "@/app/ui/staff-card";
import ReviewCard from "@/app/ui/review-card";
import RelationCard from "@/app/ui/relation-card";
import CharacterCard from "@/app/ui/character-card";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Overview = ({ params }: Props) => (
  <div className="space-y-7.5">
    <Suspense fallback={<div>Loading relations...</div>}>
      <Relations params={params} />
    </Suspense>

    <Suspense fallback={<div>Loading characters...</div>}>
      <Characters params={params} />
    </Suspense>

    <Suspense fallback={<div>Loading staff...</div>}>
      <Staff params={params} />
    </Suspense>

    <Suspense fallback={<div>Loading recommendations...</div>}>
      <Recommendations params={params} />
    </Suspense>

    <Suspense fallback={<div>Loading reviews...</div>}>
      <Reviews params={params} />
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

const Staff = async ({ params }: Props) => {
  const id = Number((await params).id);
  const staff = (await loadAnime(id))?.anime?.staff?.edges;

  if (!staff?.length) {
    return;
  }

  return (
    <section className="space-y-2.5">
      <h2 className="text-sm leading-4 font-medium">Staff</h2>

      <div className="grid gap-x-[1.875rem] gap-y-[0.9375rem] lg:grid-cols-2 xl:grid-cols-3">
        {staff.map((staff) => (
          <StaffCard key={staff?.id} staff={staff} />
        ))}
      </div>
    </section>
  );
};

const Recommendations = async ({ params }: Props) => {
  const id = Number((await params).id);
  const recommendations = (await loadAnime(id))?.anime?.recommendations?.nodes;

  if (!recommendations?.length) {
    return;
  }

  return (
    <section className="space-y-2.5">
      <h2 className="text-sm leading-4 font-medium">Recommendations</h2>

      <div className="grid gap-5 gap-x-[1.875rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7">
        {recommendations.map((recommendation) => (
          <AnimeCard
            size="xm"
            key={recommendation?.id}
            color="var(--color-text-lighter)"
            title={recommendation?.mediaRecommendation?.title?.romaji}
            imageUrl={recommendation?.mediaRecommendation?.coverImage?.large}
          />
        ))}
      </div>
    </section>
  );
};

const Reviews = async ({ params }: Props) => {
  const id = Number((await params).id);
  const reviews = (await loadAnime(id))?.anime?.reviews?.nodes;

  if (!reviews?.length) {
    return;
  }

  return (
    <section className="space-y-2.5">
      <h2 className="text-sm leading-4 font-medium">Reviews</h2>

      <div className="grid gap-5 gap-x-[1.875rem] lg:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard key={review?.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Overview;
