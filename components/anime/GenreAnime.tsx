"use client";
import { useEffect } from "react";
import GenreAnimeStore from "@/hooks/fetch-genre-anime";
import { PaginationControls } from "@/components/PaginationControl";
import { AnimeCard } from "@/components/anime/AnimeCard";
import { useSearchParams } from "next/navigation";
import { genres } from "@/lib/constants";
export const GenreAnime = () => {
	const { data, currentPage, fetchData, handleNextPage, handlePrevPage } =
		GenreAnimeStore();

	const searchParams = useSearchParams();
	const genreName = searchParams.get("name");

	const isGenreValid = genres.some((genre) => genre.name === genreName);

	useEffect(() => {
		if (isGenreValid) {
			fetchData({ page: currentPage, name: genreName });
		}
	}, [currentPage, fetchData, genreName, isGenreValid]);

	return (
		<div className="container mx-auto px-4 py-8">
			{isGenreValid ? (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{data.slice(0, 20).map((item, index) => (
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
				</>
			) : (
				<div className="text-center">
					<h1 className="text-4xl">Genre Not Found (404)</h1>
					<p>The specified genre was not found.</p>
				</div>
			)}
		</div>
	);
};
