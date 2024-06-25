import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import infoIcon from './../assets/icon10.png'; // Replace with your icon path

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const SalesOverTimeChart = () => {
  const data = {
    labels: ['Wed 20', 'Thu 21', 'Fri 22', 'Sat 23', 'Sun 24', 'Mon 25'],
    datasets: [
      {
        label: 'Current',
        data: [100, 300, 150, 200, 350, 400],
        borderColor: '#4bc0c0',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#4bc0c0',
      },
      {
        label: 'Previous',
        data: [200, 250, 100, 150, 300, 350],
        borderColor: '#9966ff',
        backgroundColor: 'transparent',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#9966ff',
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
        grid: {
          color: '#334155',
        },
        ticks: {
          color: '#ffffff',
          callback: function(value) {
            return `${value}`;
          }
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
            Sales Over Time (all stores)
          </h2>
        </div>
        <hr className="border-gray-700 my-2 " />
        <div className="pl-4 flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="ml-1 text-2xl font-bold text-white">1.482</span>
            <span className="text-yellow-700 bg-yellow-200 rounded-full px-2 py-1 ml-2 text-xs">
              -22%
            </span>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#4bc0c0] rounded-full mr-2"></span>
              <span className="text-white">Current</span>
            </div>
            <div className="flex items-center pr-6">
              <span className="w-3 h-3 bg-[#9966ff] rounded-full mr-2"></span>
              <span className="text-white">Previous</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-1 pl-4 pb-6 h-64 mr-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesOverTimeChart;
