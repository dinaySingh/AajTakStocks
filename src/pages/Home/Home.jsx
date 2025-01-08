import React from "react";

function Home() {
  return (
    <div className="py-8 pb-24 text-white bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 px-6">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
          Stay Ahead in the Market Game with{" "}
          <span className="text-orange-500">Aaj Tak Stocks</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl w-full sm:w-[75%] leading-relaxed">
          Welcome to Aaj Tak Stocks – Your Gateway to Smarter Investments! 🚀
          Explore real-time insights and expert tools to stay ahead in the
          market!
        </p>

        {/* Search Form */}
        <form className="flex w-full sm:w-[90%] bg-white text-black rounded-lg overflow-hidden">
          <input
            className="flex-1 p-3 text-base border-none outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Crypto..."
          />
          <button
            className="px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Coin Table */}
      <div className="max-w-screen-lg mx-auto mt-20 bg-gradient-to-b from-[#1f2937] to-[#0f172a] rounded-lg shadow-lg">
        <div className="grid grid-cols-5 px-6 py-4 font-semibold text-lg text-white border-b border-gray-700">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>


        {/* Example Rows (Add dynamic rows here later) */}
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="grid grid-cols-5 px-6 py-4 text-sm sm:text-base text-gray-300 hover:bg-[#111827] transition-all"
          >
            <p>{index}</p>
            <p>Bitcoin</p>
            <p>$50,000</p>
            <p className="text-green-500">+5%</p>
            <p>$1T</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
