import { create } from "zustand";
import axios from "axios";

interface AnimeItem {
	animeTitle: string;
	animeImg: string;
	releasedDate: number;
	animeId: string;
}

interface GenreAnimeStoreInterface {
	data: AnimeItem[];
	currentPage: number;
	fetchData: ({
		name,
		page,
	}: {
		name: string | null;
		page: number;
	}) => Promise<void>;
	handleNextPage: () => void;
	handlePrevPage: () => void;
}

const GenreAnimeStore = create<GenreAnimeStoreInterface>((set) => ({
	data: [],
	currentPage: 1,
	fetchData: async ({ name, page }) => {
		try {
			const response = await axios.get(
				`/api/anime/genre?name=${name}&page=${page}`
			);
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

export default GenreAnimeStore;
