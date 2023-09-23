import React from "react";
import { NavDropdown } from "@/components/navigation/NavDropdown";
import { Search } from "@/components/navigation/Search";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Navbar = () => {
	return (
		<nav className="p-5 border-b-gray-200 ">
			<div className="flex justify-between">
				<div className="flex items-center text-center space-x-2">
					<h1 className="text-2xl font-bold uppercase text-teal-500">Animio</h1>
					<NavDropdown />
				</div>
				<Search />
				<ModeToggle />
			</div>
		</nav>
	);
};
