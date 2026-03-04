export interface MarketData{
symbol:string
price:number
change:number
volume:number
oiLevels:{strike:number,oi:number}[]
}

export async function getMarketData():Promise<MarketData>{

// Placeholder until real FYERS connection
return{
symbol:"NIFTY",
price:22450,
change:1.25,
volume:320000,

oiLevels:[
{strike:22300,oi:12000},
{strike:22400,oi:18000},
{strike:22500,oi:25000},
{strike:22600,oi:14000},
{strike:22700,oi:9000}
]
}

}