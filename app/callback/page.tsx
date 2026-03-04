'use client'

import { useSearchParams } from 'next/navigation'

export default function Callback(){

 const params = useSearchParams()
 const authCode = params.get("auth_code")

 return (
   <div style={{padding:40}}>
     <h2>FYERS Login Successful</h2>
     <p>Auth Code:</p>
     <pre>{authCode}</pre>
   </div>
 )

}