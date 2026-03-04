import { NextResponse } from "next/server"

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)

  const authCode = searchParams.get("auth_code")

  if (!authCode) {
    return NextResponse.json({
      message: "FYERS callback reached",
      status: "waiting for auth_code"
    })
  }

  return NextResponse.json({
    message: "Auth code received",
    authCode
  })
}