import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const name = searchParams.get("name");
		const page = searchParams.get("page") || 1;

		const response = await axios.get(
			`${process.env.API_URL}/genre/${name}?page=${page}`
		);

		return new NextResponse(JSON.stringify(response.data), { status: 200 });
	} catch (error) {
		console.log("[GENRE_ROUTE]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
