"use client";
import { useEffect } from "react";
import SearchAnimeStore from "@/hooks/search-anime";
import { useSearchParams } from "next/navigation";
import { AnimeCard } from "./AnimeCard";

export const SearchAnime = () => {
	const { data, fetchData } = SearchAnimeStore();

	const searchParams = useSearchParams();
	const animeName = searchParams.get("anime");

	useEffect(() => {
		fetchData(animeName);
	}, [fetchData, animeName]);

	const showNoResults = !data || data.length === 0;

	return (
		<div className="container mx-auto px-4 py-8">
			{showNoResults ? (
				<div className="text-center ">
					<h1 className="text-4xl">No Results Found (404)</h1>
					<p>No anime found for the specified search.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{data.map((item, index) => (
						<AnimeCard
							key={index}
							title={item.animeTitle}
							imageUrl={item.animeImg}
							releaseDate={item.releasedDate}
							animeId={item.animeId}
						/>
					))}
				</div>
			)}
		</div>
	);
};
