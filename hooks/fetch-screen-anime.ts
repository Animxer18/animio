import { create } from "zustand";
import axios from "axios";

interface ScreenAnimeStoreProps {
	data: any;
	fetchData: ({
		anime,
		episode,
	}: {
		anime: string | null;
		episode: string | number;
	}) => void;
}
export const ScreenAnimeStore = create<ScreenAnimeStoreProps>((set) => ({
	data: [],
	fetchData: async ({ anime, episode }) => {
		try {
			const response = await axios.get(
				`/api/anime/watch?anime=${anime}&episode=${episode}`
			);
			set({ data: response.data.sources[0] });
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	},
}));
