import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AvgOrderValueChart = () => {
  const data = {
    labels: ["Wed 20", "Thu 21", "Fri 22", "Sat 23", "Sun 24", "Mon 25"],
    datasets: [
      {
        label: "Current",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "#4bc0c0",
        borderColor: "#4bc0c0",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#4bc0c0",
        pointBackgroundColor: "#4bc0c0",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#4bc0c0",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [12, 30, 50, 40, 60, 70],
      },
      {
        label: "Previous",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "#9966ff",
        borderColor: "#9966ff",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#9966ff",
        pointBackgroundColor: "#9966ff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#9966ff",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [20, 40, 60, 50, 70, 75],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        min: 0,
        max: 75,
        ticks: {
          color: '#ffffff',
          stepSize: 25,  // Define step size for intervals
          callback: function(value) {
            return `$${value}`; // Display values as dollars
          }
        },
        grid: {
          color: '#334155',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000000',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-sm shadow-lg">
      <div className="mb-4">
        <h2 className="pt-4 pl-4 pb-2 text-lg font-normal text-white">
          AVG Order Value
        </h2>
        <hr className="border-gray-700 my-2 " />
        <div className="pl-4 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="ml-1 text-2xl font-bold text-white">$72</span>
            <span className="text-green-500 bg-green-200 rounded-full px-2 py-1 text-xs font-bold ml-2">+34%</span>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
              <span>Current</span>
            </div>
            <div className="pr-4 flex items-center space-x-1">
              <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              <span>Previous</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-1 pl-4 pb-6 h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AvgOrderValueChart;
