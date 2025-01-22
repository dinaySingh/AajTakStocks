import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../Components/LineChart/LineChart";

function Coin() {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);

  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoinData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      setError("Failed to fetch coin data.");
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      setError("Failed to fetch historical data.");
      console.error(err);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchCoinData(), fetchHistoricalData()]).finally(() =>
      setIsLoading(false)
    );
  }, [currency]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {coinData && (
        <div className="flex flex-col items-center bg-white shadow-md rounded-md p-6 mb-8">
          <img
            src={coinData.image.large}
            alt={coinData.name}
            className="w-32 h-32 object-contain mb-4"
          />
          <p className="text-2xl font-bold text-gray-800">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </p>
          <p className="text-gray-500 text-sm">
            Market Rank: #{coinData.market_cap_rank}
          </p>
        </div>
      )}

      {historicalData && (
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Price History (Last 10 Days)
          </h2>
          <LineChart historicalData={historicalData} />
        </div>
      )}

      {coinData && (
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Market Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">Current Price</p>
              <p className="text-xl font-semibold text-gray-800">
                {currency.symbol}
                {coinData.market_data.current_price[currency.name].toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">Market Cap</p>
              <p className="text-xl font-semibold text-gray-800">
                {currency.symbol}
                {coinData.market_data.market_cap[currency.name].toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">24 Hour High</p>
              <p className="text-xl font-semibold text-green-600">
                {currency.symbol}
                {coinData.market_data.high_24h[currency.name].toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">24 Hour Low</p>
              <p className="text-xl font-semibold text-red-600">
                {currency.symbol}
                {coinData.market_data.low_24h[currency.name].toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Coin;
