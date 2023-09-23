import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { genres } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getRandomGenre = () => {
	const randomIndex = Math.floor(Math.random() * genres.length);
	return genres[randomIndex].name;
};
