"use client";
import { Bubble } from "react-chartjs-2";

const BubbleChart = () => {
  const data = {
    datasets: [
      {
        label: "Bubble Dataset",
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 25, y: 25, r: 20 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return <Bubble data={data} />;
};

export default BubbleChart;
