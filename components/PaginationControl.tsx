"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
	currentPage: number;
	maxPages: number;
	onNextPage: () => void;
	onPrevPage: () => void;
}
export const PaginationControls = ({
	currentPage,
	maxPages,
	onNextPage,
	onPrevPage,
}: PaginationProps) => {
	return (
		<div className="flex flex-row justify-between items-center space-x-3 mt-4">
			<Button
				onClick={onPrevPage}
				disabled={currentPage === 1}>
				Previous Page
			</Button>
			{currentPage < maxPages && (
				<Button onClick={onNextPage}>Next Page</Button>
			)}
		</div>
	);
};
