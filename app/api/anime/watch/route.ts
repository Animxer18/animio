import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const anime = searchParams.get("anime");
		const episode = searchParams.get("episode");

		const response = await axios.get(
			`${process.env.API_URL}/vidcdn/watch/${anime}-episode-${episode}`
		);

		return new NextResponse(JSON.stringify(response.data), { status: 200 });
	} catch (error) {
		console.log("[WATCH_ROUTE]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
