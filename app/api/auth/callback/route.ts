import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const authCode = searchParams.get("auth_code");

  return NextResponse.json({
    message: "FYERS callback reached",
    auth_code: authCode ?? null
  });
}