"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { ChartData } from "../lib/Chartdata";

const BarGrafik = () => {
  const data = {
    datasets: [
      {
        data: [20, 20],
      },
    ],
    labels: ["A", "B"],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarGrafik;
