import FyersAPI from "fyers-api-v3"

/*
 Generates FYERS login URL
*/

export function getFyersLoginUrl(){

 const fyers = new FyersAPI()

 fyers.setAppId(process.env.FYERS_APP_ID || "")

 return fyers.generateAuthCode({
   client_id: process.env.FYERS_APP_ID || "",
   redirect_uri: "https://options-flow-dashboard1.vercel.app/",
   response_type: "code",
   state: "sample"
 })

}