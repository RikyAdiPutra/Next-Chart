"use client";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Revenue",
        data: [80, 100, 70],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
