interface Props{
symbol:string
price:number
change:number
volume:number
}

export default function MarketOverview({
symbol,
price,
change,
volume
}:Props){

return(
<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-bold mb-4">
Market Overview
</h2>

<div className="grid grid-cols-2 gap-4">

<div>
<p className="text-gray-500 text-sm">Symbol</p>
<p className="font-semibold">{symbol}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Price</p>
<p className="font-semibold">{price}</p>
</div>

<div>
<p className="text-gray-500 text-sm">Change</p>
<p className={change>0?"text-green-500":"text-red-500"}>
{change}%
</p>
</div>

<div>
<p className="text-gray-500 text-sm">Volume</p>
<p className="font-semibold">{volume}</p>
</div>

</div>
</div>
)

}