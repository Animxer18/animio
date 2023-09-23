import Image from "next/image";

interface Props {
	title: string | undefined;
	image: string | undefined;
	genres: string[];
	synopsis: string;
}
export const DetailsCard = ({ image, title, genres, synopsis }: Props) => {
	return (
		<div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 flex border-2">
			<div className="w-1/2">
				<Image
					className="w-full object-cover"
					src={image as string}
					alt={title as string}
					width={300}
					height={500}
				/>
				<div className="p-4">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						Genres: {genres.join(", ")}
					</div>
				</div>
			</div>
			<div className="w-1/2 p-4">
				<div className="text-white text-2xl font-bold mb-2">{title}</div>
				<p className="text-gray-500">{synopsis}</p>
			</div>
		</div>
	);
};
