"use client";
import useSearch from "@/hooks/search-hook";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const Search = () => {
	const router = useRouter();
	const { search, setSearch } = useSearch();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		router.push(`/search?anime=${search}`);
	};
	return (
		<div className="flex justify-center">
			<form
				className="flex space-x-2"
				onSubmit={handleSubmit}>
				<Input
					placeholder="Search Anime"
					value={search}
					onChange={handleSearchChange}
				/>
				<Button
					variant={"outline"}
					type="submit">
					Search
				</Button>
			</form>
		</div>
	);
};
