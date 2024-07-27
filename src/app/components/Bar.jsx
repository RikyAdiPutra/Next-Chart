"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const ChartBar = () => {
  const data = {
    datasets: [
      {
        label: "Penjualan Per 6 Bulan 2023",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "#f5ec42",
          "#57f542",
          "#42f5c5",
          "#42a4f5",
          "#f542f5",
        ],
      },
    ],
    labels: ["Januari", "Februari", "Maret", "April", "Mei", "Juni"],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default ChartBar;
