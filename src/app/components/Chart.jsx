"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { ChartData } from "../lib/Chartdata";

const BarGrafik = () => {
  const productsName = ChartData.map((item) => item.name);
  const productsSales = ChartData.map((item) => item.sales);
  const data = {
    datasets: [
      {
        data: productsSales,
      },
    ],
    labels: productsName,
  };
  return (
    <div className="w-full h-full">
      <Bar data={data} />
    </div>
  );
};

export default BarGrafik;
