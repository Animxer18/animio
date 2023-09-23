"use client";
import { useEffect } from "react";
import MoviesAnimeStore from "@/hooks/fetch-movies-anime";
import { PaginationControls } from "@/components/PaginationControl";
import { AnimeCard } from "@/components/anime/AnimeCard"; // Import your AnimeCard component

export const MoviesAnime = () => {
	const { data, currentPage, fetchData, handleNextPage, handlePrevPage } =
		MoviesAnimeStore();

	useEffect(() => {
		fetchData(currentPage);
	}, [currentPage, fetchData]);

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{data.slice(0, 4).map((item, index) => (
					<AnimeCard
						key={index}
						title={item.animeTitle}
						imageUrl={item.animeImg}
						releaseDate={item.releasedDate}
						animeId={item.animeId}
					/>
				))}
			</div>
			<PaginationControls
				currentPage={currentPage}
				maxPages={26}
				onNextPage={handleNextPage}
				onPrevPage={handlePrevPage}
			/>
		</div>
	);
};
