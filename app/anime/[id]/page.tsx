import { Suspense } from "react";
import { loadAnime } from "@/app/lib/server-fetchers";

import RelationCard from "@/app/ui/relation-card";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Overview = ({ params }: Props) => (
  <div>
    <Suspense fallback={<div>Loading relations...</div>}>
      <Relations params={params} />
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

export default Overview;
