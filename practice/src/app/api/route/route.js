import { NextResponse } from "next/server";

export async function GET(req) {
  const requestHeaders = new Headers(req.headers);
  console.log(requestHeaders);

  return NextResponse.json({ msg: "Hello Bro" });
}

export async function POST(req) {
  console.log(req);
  return NextResponse.json({ msg: "Hello Bro" });
}
