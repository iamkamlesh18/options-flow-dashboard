interface OILevel{
strike:number
oi:number
}

export default function OIChart({
data
}:{data:OILevel[]}){

const maxOI=data.length?Math.max(...data.map(d=>d.oi)):1

return(

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-bold mb-4">
Open Interest
</h2>

<div className="space-y-2">

{data.map(level=>{

const width=(level.oi/maxOI)*100

return(

<div key={level.strike}>

<div className="flex justify-between text-sm">
<span>{level.strike}</span>
<span>{level.oi}</span>
</div>

<div className="bg-gray-200 h-2 rounded">

<div
className="bg-blue-500 h-2 rounded"
style={{width:`${width}%`}}
/>

</div>

</div>

)

})}

</div>

</div>

)

}