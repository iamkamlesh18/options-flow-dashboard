export function getFyersLoginUrl() {
  const clientId = "JUQWVFLO4G-100"

  const redirect = encodeURIComponent(
    "https://options-flow-dashboard1.vercel.app/callback"
  )

  return `https://api.fyers.in/api/v3/generate-authcode?client_id=${clientId}&redirect_uri=${redirect}&response_type=code&state=sample`
}