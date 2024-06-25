import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

import infoIcon from "./../assets/icon10.png"; // Replace with your icon path

const SalesVsRefundsChart = () => {
  const data = {
    labels: ["Dec 20", "Jan 21", "Feb 21", "Mar 21", "Apr 21", "May 21"],
    datasets: [
      {
        label: "Sales",
        data: [5000, 6000, 7000, 6000, 6500, 7000],
        backgroundColor: "#4bc0c0",
      },
      {
        label: "Refunds",
        data: [-2000, -3000, -2000, -2500, -3000, -3500],
        backgroundColor: "#9966ff",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        stacked: true,
        grid: {
          color: '#334155',
        },
        ticks: {
          color: "#ffffff",
          callback: function (value) {
            return `${value}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-sm shadow-lg">
      <div className="mb-4">
        <div className="flex items-center pt-4 pl-4">
          <h2 className="text-lg font-normal text-white mr-2">
            Sales VS Refund
          </h2>
          <img src={infoIcon} alt="Info Icon" className="w-4 h-4" />
        </div>
        <hr className="border-gray-700 my-2 " />
        <div className="pl-4 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="ml-1 text-2xl font-bold text-white">+$6,796</span>
            <span className="text-yellow-700 bg-yellow-200 rounded-full px-2 py-1 ml-2 text-xs">
              -34%
            </span>
          </div>
        </div>
      </div>
      <div className="pt-1 pl-4 pb-4 h-64 mr-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesVsRefundsChart;
