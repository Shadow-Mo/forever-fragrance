import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  // Process data (e.g., save to DB)
  return NextResponse.json({ message: "Order received!" });
}