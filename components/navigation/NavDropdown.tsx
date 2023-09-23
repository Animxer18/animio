import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { genres } from "@/lib/constants";
import { Button } from "../ui/button";
import Link from "next/link";
export const NavDropdown = () => {
	const numColumns = 3; // Number of columns to display

	const renderColumns = () => {
		const columns = [];

		for (let i = 0; i < numColumns; i++) {
			const columnItems = [];
			for (let j = i; j < genres.length; j += numColumns) {
				columnItems.push(
					<div
						key={genres[j].name}
						className="mb-2">
						<Link href={`/genre?name=${genres[j].name}`}>
							{genres[j].label}
						</Link>
					</div>
				);
			}

			columns.push(
				<div
					key={i}
					className="flex-1 mx-2">
					{columnItems}
				</div>
			);
		}

		return columns;
	};
	return (
		<div>
			<Popover>
				<PopoverTrigger className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md">
					Genres
				</PopoverTrigger>
				<PopoverContent className="text-center py-2 w-fit max-w-[90vw]">
					<div className="flex flex-wrap justify-center">{renderColumns()}</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
