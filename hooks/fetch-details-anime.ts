import { create } from "zustand";
import axios from "axios";

interface Episode {
	episodeId: string;
	episodeNum: number;
	episodeUrl: string;
	isSubbed: boolean;
	isDubbed: boolean;
}

interface AnimeDetailItem {
	animeImg: string;
	animeTitle: string;
	genres: string[];
	synopsis: string;
	episodesList: Episode[];
}

interface AnimeDetailStoreProps {
	data: AnimeDetailItem | null;
	fetchData: (name: string | null) => Promise<void>;
}

export const AnimeDetailStore = create<AnimeDetailStoreProps>((set) => ({
	data: {
		animeImg: "",
		animeTitle: "",
		genres: [],
		synopsis: "",
		episodesList: [],
	},
	fetchData: async (name) => {
		try {
			const response = await axios.get(`/api/anime/details?name=${name}`);
			set({ data: response.data });
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	},
}));
