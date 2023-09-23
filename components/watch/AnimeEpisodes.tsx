"use client";
import { useState } from "react";
import { PaginationControls } from "@/components/PaginationControl";
import { Button } from "@/components/ui/button";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
export const AnimeEpisodes = ({ episodes }: { episodes: any }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const anime = searchParams.get("anime");
	const episode = searchParams.get("episode");

	const url = `${pathname}?anime=${anime}`;

	const [currentPage, setCurrentPage] = useState(1);

	const itemsPerPage = 30;
	const totalItems = episodes.length;

	const maxPages = Math.ceil(totalItems / itemsPerPage);
	const onNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPages));
	};
	const onPrevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};
	const getCurrentPageItems = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		// Simulated data, replace this with your actual data fetching mechanism
		const data = Array.from(
			{ length: totalItems },
			(_, index) => `${index + 1}`
		);
		return data.slice(startIndex, endIndex);
	};

	return (
		<div className="mx-auto max-w-screen-lg p-4">
			{/* Display the current page items in a grid */}
			<div className="grid grid-cols-10 gap-2 items-center text-center">
				{getCurrentPageItems().map((item, index) => (
					<Link
						href={`${url}&episode=${item}`}
						key={index}
						onClick={(e) => item === episode && e.preventDefault()}
						className={cn(
							"border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md",
							item === episode && "bg-blue-700 opacity-70 cursor-not-allowed"
						)} // Add this class to prevent width change
					>
						{item}
					</Link>
				))}
			</div>

			{/* Pagination controls */}
			<PaginationControls
				currentPage={currentPage}
				maxPages={maxPages}
				onNextPage={onNextPage}
				onPrevPage={onPrevPage}
			/>
		</div>
	);
};
