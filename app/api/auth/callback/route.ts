import { NextResponse } from "next/server"

// FYERS redirects here after login
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const authCode = searchParams.get("auth_code")

  // If user just visits the URL manually
  if (!authCode) {
    return NextResponse.json({
      status: "OK",
      message: "FYERS callback endpoint is working",
    })
  }

  // FYERS login success case
  return NextResponse.json({
    status: "AUTH_CODE_RECEIVED",
    auth_code: authCode,
  })
}