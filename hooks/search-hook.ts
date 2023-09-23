import { create } from "zustand";

interface useSearchProps {
	search: string;
	setSearch: (search: string) => void;
}

const useSearch = create<useSearchProps>((set) => ({
	search: "",
	setSearch: (search) => set({ search }),
}));

export default useSearch;
