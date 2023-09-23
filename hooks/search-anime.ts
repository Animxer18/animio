import { create } from "zustand";
import axios from "axios";

interface AnimeItem {
	animeTitle: string;
	animeImg: string;
	releasedDate: number;
	animeId: string;
}

interface searchAnimeStoreProps {
	data: AnimeItem[];
	fetchData: (name: string | null) => Promise<void>;
}

export const SearchAnimeStore = create<searchAnimeStoreProps>((set) => ({
	data: [],
	fetchData: async (name) => {
		try {
			const response = await axios.get(`/api/anime/search?name=${name}`);
			set({ data: response.data });
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	},
}));

export default SearchAnimeStore;
