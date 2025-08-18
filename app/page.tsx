import TopAnimeList from "@/app/ui/top-anime-list";

const Home = () => (
  <main className="mx-auto max-w-[71.25rem] p-4 2xl:max-w-[85rem]">
    <h1 className="my-8.5 font-(family-name:--font-overpass) text-[1.75rem] font-extrabold">
      Top Anime
    </h1>
    <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <TopAnimeList />
    </div>
  </main>
);

export default Home;
