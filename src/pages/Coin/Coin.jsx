import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'

function Coin() {
  const {coinId} = useParams()
const [coinData, setcoinData] = useState(null)
const [historicalData, sethistoricalData] = useState()
const {currency}= useContext(CoinContext)

const fetchCoinData = async () => {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then(res => res.json())
    .then(res => setcoinData(res))
    .catch(err => console.error(err));

  }

  const fetchHistoricalData= async ()=> {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
  .then(res => res.json())
  .then(res => sethistoricalData(res))
  .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoinData()
  },[currency])

  if (!coinData) {
    return <div className="flex items-center justify-center min-h-screen">
    <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
  
  }
  
  return (
    <div>
<div>
  <img src={coinData.image.large} alt="" />
  <p><b>{coinData.name}({coinData.symbol})</b></p>
</div>
    </div>
  )
}

export default Coin