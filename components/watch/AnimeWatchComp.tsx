import React from "react";
import { AnimeScreen } from "@/components/watch/AnimeScreen";
import { AnimeDetails } from "./AnimeDetails";

export const AnimeWatchComp = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center">
				<AnimeScreen />
			</div>
			<AnimeDetails />
		</div>
	);
};
