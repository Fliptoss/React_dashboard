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

import ArrowIcon1 from "./../assets/arrowIcon1.png";
import ArrowIcon2 from "./../assets/arrowIcon2.png";
import ArrowIcon3 from "./../assets/arrowIcon3.png";
import Path from "./../assets/Path.png";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Cards = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        title="Acme Plus"
        subtitle="SALES"
        value="$24.780"
        icon={ArrowIcon1}
        icon2={Path}
        percentage="+49%"
        graphData={generateMockData()}
      />
      <Card
        title="Acme Advanced"
        subtitle="SALES"
        value="$13.500"
        icon={ArrowIcon2}
        icon2={Path}
        percentage="+36%"
        graphData={generateMockData()}
      />
      <Card
        title="Acme Professional"
        subtitle="SALES"
        value="$8.200"
        icon={ArrowIcon3}
        icon2={Path}
        percentage="+22%"
        graphData={generateMockData()}
      />
    </div>
  );
};

const Card = ({ title, subtitle, value, icon, icon2, percentage, graphData }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      <img src={icon} alt={title} className="w-6 h-6 self-start" />
      <img src={icon2} atlt = {title} className="w-2 h-2 float-right" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
        {/* <img src={icon} alt={title} className="w-8 h-8" /> */}
      </div>
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold">{value}</span>
        <div className="text-green-500 bg-green-200 rounded-full px-2 py-1 text- font-bold ml-2">
          {percentage}
        </div>
      </div>
      <div className="mt-4">
        <Line data={graphData} options={graphOptions} />
      </div>
    </div>
  );
};

const generateMockData = () => {
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        // fill: true,
        borderColor: "rgba(75, 192, 192, 1)",
        // backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
    
    datasets: [
      {
        label: "Sales",
        data: [30, 82, 70, 11, 66, 35, 20],
        // fill: true,
        borderColor: "red",
        // backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };
};

const graphOptions = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleColor: "rgba(255, 255, 255, 0.7)",
      bodyColor: "rgba(255, 255, 255, 0.7)",
    },
  },
};

export default Cards;
