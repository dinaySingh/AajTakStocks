import React, { useContext } from "react";
import { IoIosLogIn } from "react-icons/io";

import logo from "../../assets/AajTakStocks.jpg";
import { CoinContext } from "../../context/CoinContext";

function Navbar() {

const {setCurrency} = useContext(CoinContext)

const currencyHandler = (e) => {
switch (e.target.value){
  case "usd": {
    setCurrency({name:"usd", symbol: "$"})
    break;
  }
  case "eur": {
    setCurrency({name:"eur", symbol: "€"})
    break;
  }
  case "inr": {
    setCurrency({name:"inr", symbol: "₹"})
    break;
  }
  default : {
    setCurrency({name:"usd", symbol: "$"})
    break;
  }
}
}

  return (
    <div className="px-6 py-4 flex items-center justify-between bg-[#1a1a2e] text-white border-b border-gray-700">
      {/* Logo */}
      <img src={logo} alt="Aaj Tak Stocks Logo" className="h-16 w-auto" />

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-base font-medium">
        <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Features</li>
        <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Pricing</li>
        <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">Blog</li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Currency Selector */}
        <select 
        onChange={currencyHandler}
        className="p-2 bg-[#0f3460] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        {/* Sign Up Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white border border-orange-600 rounded-md hover:bg-orange-700 transition-all duration-300">
          Sign up
          <IoIosLogIn size={20} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
