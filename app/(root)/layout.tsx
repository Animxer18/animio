import { Navbar } from "@/components/navigation/Navbar";
import react from "react";
export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
}
