"use client";

import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const ChartBar = () => {
  const data = {
    datasets: [
      {
        label: "Example",
        data: [10, 15],
      },
    ],
    labels: ["A", "B"],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "red",
        },
      },
    },
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] bg-gray-200">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartBar;
