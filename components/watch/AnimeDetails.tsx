"use client";
import { AnimeDetailStore } from "@/hooks/fetch-details-anime";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { AnimeEpisodes } from "./AnimeEpisodes";
import { DetailsCard } from "./DetailsCard";

export const AnimeDetails = () => {
	const { data, fetchData } = AnimeDetailStore();

	const searchParams = useSearchParams();
	const name = searchParams.get("anime");

	useEffect(() => {
		fetchData(name);
	}, [name, fetchData]);

	console.log(data);

	function extractEpisodeNums(episodesList: any) {
		return episodesList.map((episode: any) => episode.episodeNum);
	}

	return (
		<div>
			<AnimeEpisodes episodes={extractEpisodeNums(data?.episodesList)} />
			{/* <AnimeEpisodes episodes={} /> */}
			{/* Anime Detail Card */}
			<DetailsCard
				title={data?.animeTitle}
				image={data?.animeImg}
				genres={data?.genres as string[]}
				synopsis={data?.synopsis as string}
			/>
		</div>
	);
};
