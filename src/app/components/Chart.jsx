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
        label: "Foods & Drinks",
        data: productsSales,
        backgroundColor: [
          "#a83293",
          "#6632a8",
          "#3281a8",
          "#3242a8",
          "#a83277",
          "#32a883",
          "#3ea832",
          "#a8a832",
          "#a86932",
          "#329ea8",
        ],
      },
    ],
    labels: productsName,
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "black",
          boxWidth: 0,
        },
      },
    },
    layout: {
      padding: 20,
    },
  };
  return (
    <div className="w-full h-full">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGrafik;
