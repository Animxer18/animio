import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const name = searchParams.get("name");

		const response = await axios.get(
			`${process.env.API_URL}/search?keyw=${name?.toLocaleLowerCase()}`
		);

		return new NextResponse(JSON.stringify(response.data), { status: 200 });
	} catch (error) {
		console.log("[POPULAR_ROUTE]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
