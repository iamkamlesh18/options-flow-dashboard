import { NextResponse } from "next/server"

/*
 Exchange auth_code → access_token
*/

export async function POST(req:Request){

 const body = await req.json()
 const { auth_code } = body

 return NextResponse.json({
   message:"Received auth code",
   auth_code
 })

}