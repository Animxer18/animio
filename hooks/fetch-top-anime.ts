import axios from "axios";
import { create } from "zustand";

interface AnimeItem {
	animeTitle: string;
	animeImg: string;
	releasedDate: number;
	animeId: string;
}

interface TopAnimeStoreInterface {
	data: AnimeItem[];
	currentPage: number;
	fetchData: (page: number) => Promise<void>;
	handleNextPage: () => void;
	handlePrevPage: () => void;
}

const TopAnimeStore = create<TopAnimeStoreInterface>((set) => ({
	data: [],
	currentPage: 1,
	fetchData: async (page) => {
		try {
			const response = await axios.get(`/api/anime/top?page=${page}`);
			set({ data: response.data });
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	},
	handleNextPage: () =>
		set((state) => ({ currentPage: Math.min(state.currentPage + 1, 26) })),
	handlePrevPage: () =>
		set((state) => ({ currentPage: Math.max(state.currentPage - 1, 1) })),
}));

export default TopAnimeStore;
