import ChartDasboard from "./components/DashboardChart";
import LineChart from "./components/Line";
import PieChart from "./components/Pie";
import DoughnutChart from "./components/Doughtnut";
import RadarChart from "./components/Radar";
import PolarAreaChart from "./components/Polar";
import BubbleChart from "./components/Bubble";

export default function Home() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <ChartDasboard />
      <div>
        <h1>ALL EXAMPLE CHART</h1>
        <main className="flex justify-center">
          <div className="w-[500px] flex flex-col gap-8 p-8">
            <LineChart />
            <PieChart />
            <DoughnutChart />
            <RadarChart />
            <PolarAreaChart />
            <BubbleChart />
          </div>
        </main>
      </div>
    </div>
  );
}
