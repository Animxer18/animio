"use client";
import { useEffect } from "react";
import { ScreenAnimeStore } from "@/hooks/fetch-screen-anime";
import { useSearchParams } from "next/navigation";
import ReactPlayer from "react-player";

export const AnimeScreen = () => {
	const { data, fetchData } = ScreenAnimeStore();

	const searchParams = useSearchParams();
	const anime = searchParams.get("anime");
	const episode = searchParams.get("episode") || 1;

	useEffect(() => {
		fetchData({ anime, episode });
	}, [anime, episode, fetchData]);

	return (
		<>
			<ReactPlayer
				url={data.file}
				playing
				controls
			/>
		</>
	);
};
