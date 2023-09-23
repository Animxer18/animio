import { MoviesAnime } from "@/components/anime/MoviesAnime";
import { PopularAnime } from "@/components/anime/PopularAnime";
import { TopAnime } from "@/components/anime/TopAnime";

export default function Home() {
	return (
		<main>
			<h1 className="text-2xl font-bold mb-4 text-center">Popular Anime</h1>
			<PopularAnime />

			<h1 className="text-2xl font-bold mb-4 text-center">Top Airing</h1>
			<TopAnime />

			<h1 className="text-2xl font-bold mb-4 text-center">Movies</h1>
			<MoviesAnime />
		</main>
	);
}
