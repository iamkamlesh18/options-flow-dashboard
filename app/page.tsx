import MarketOverview from "@/components/MarketOverview";
import OIChart from "@/components/OIChart";
import { getMarketData } from "@/services/api";
import { getFyersLoginUrl } from "@/services/fyersAuth";

export default async function Page() {
  const market = await getMarketData();

  const loginUrl = getFyersLoginUrl();

  return (
    <div className="min-h-screen bg-zinc-100 p-10">
      <h1 className="text-3xl font-bold mb-8">Options Flow Dashboard</h1>

      <a
        href={loginUrl}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6 inline-block"
      >
        Login with FYERS
      </a>

      <div className="grid md:grid-cols-2 gap-6">
        <MarketOverview
          symbol={market.symbol}
          price={market.price}
          change={market.change}
          volume={market.volume}
        />

        <OIChart data={market.oiLevels} />
      </div>
    </div>
  );
}
