import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, SetDisplayCoin] = useState([]);

  useEffect(() => {
    SetDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="py-10 pb-24 text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 px-6">
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Stay Ahead in the Market Game with{" "}
          <span className="text-[#35B2BF]">CryptoOrbit</span>
        </h1>
        <p className="text-lg sm:text-xl w-full sm:w-[75%] leading-relaxed">
          Welcome to CryptoOrbit – Your Gateway to Smarter Investments! 🚀
          Explore real-time insights and expert tools to stay ahead in the
          market!
        </p>
        <form className="flex w-full sm:w-[75%] bg-white text-black rounded-lg overflow-hidden shadow-md">
          <input
            className="flex-1 p-3 text-base border-none outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Crypto..."
          />
          <button
            className="m-2 rounded-md px-6 py-3 bg-[#35B2BF] text-white font-medium hover:bg-[#216a72] transition-all"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div className="max-w-screen-xl mx-auto mt-16 bg-gradient-to-b from-[#1f2937] to-[#0f172a] rounded-lg shadow-lg">
  {/* Table Header */}
  <div className="grid grid-cols-[50px,1fr,1fr,1fr,1fr] px-6 py-4 font-semibold text-lg text-white border-b border-gray-700">
    <p>#</p>
    <p>Coin</p>
    <p>Price</p>
    <p>24H Change</p>
    <p>Market Cap</p>
  </div>

  {/* Table Rows */}
  {displayCoin.slice(0, 10).map((item, index) => (
    <div
      key={index}
      className="grid grid-cols-[50px,1fr,1fr,1fr,1fr] px-6 py-4 items-center text-base sm:text-lg text-gray-300 border-b border-gray-700 hover:bg-[#111827] transition-all last:border-none"
    >
      <p>{item.market_cap_rank}</p>
      <div className="flex items-center gap-3">
        <img className="w-10 h-10 rounded-full" src={item.image} alt="" />
        <p>
          {item.name} <span className="uppercase text-gray-400">({item.symbol})</span>
        </p>
      </div>
      <p>
        {currency.symbol} {item.current_price.toLocaleString()}
      </p>
      <p
        className={
          item.price_change_percentage_24h >= 0
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {Math.floor(item.price_change_percentage_24h * 100) / 100}%
      </p>
      <p>
        {currency.symbol} {item.market_cap.toLocaleString()}
      </p>
    </div>
  ))}
</div>

    </div>
  );
}

export default Home;
