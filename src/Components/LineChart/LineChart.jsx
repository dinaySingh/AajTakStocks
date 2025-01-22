import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

function LineChart({ historicalData }) {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const dataCopy = [["Date", "Price"]];
      historicalData.prices.forEach((item) => {
        // Extract date (item[0]) and price (item[1])
        const date = new Date(item[0]).toLocaleDateString().slice(0,-5); // Format timestamp
        const price = item[1];
        dataCopy.push([date, price]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px" // Specify a fixed height
      legendToggle
      options={{
        title: "Price History",
        hAxis: { title: "Date" },
        vAxis: { title: "Price" },
        // legend: { position: "bottom" },
      
      }}
    />
  );
}

export default LineChart;
