import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface CardContentProps {
	title: string;
	imageUrl: string;
	releaseDate: number;
	animeId: string;
}

export const AnimeCard = ({
	title,
	imageUrl,
	releaseDate,
	animeId,
}: CardContentProps) => {
	return (
		<Card className="rounded-lg overflow-hidden shadow-lg flex flex-col">
			<div className="relative h-48 mb-4">
				<Image
					src={imageUrl}
					alt={title}
					layout="fill"
					objectFit="cover"
					className="rounded-t-lg"
				/>
			</div>
			<CardContent className="flex flex-col flex-grow justify-between">
				<div>
					<h2 className="text-lg font-semibold text-teal-600 uppercase max-h-16 overflow-y-auto">
						{title}
					</h2>
					<p className="text-sm text-gray-500">{releaseDate}</p>
				</div>
				<div className="flex justify-center">
					<Link href={`/anime?anime=${animeId}`}>
						<Button variant="outline">Watch</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};
