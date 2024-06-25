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
import advancedIcon from './../assets/arrowIcon2.png';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AcmeAdvancedCard = () => {
  const graphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
      {
        label: 'Revenue',
        data: [38, 58, 50, 29, 96, 37, 100],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
      {
        label: 'Profit',
        data: [18, 38, 30, 9, 76, 17, 80],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
      }
    ]
  };

  const graphOptions = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#334155',
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: 'rgba(255, 255, 255, 0.7)',
        bodyColor: 'rgba(255, 255, 255, 0.7)',
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
        <img src={advancedIcon} alt="Acme Advanced" className="w-5 h-5" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Acme Advanced</h2>
          <p className="text-gray-400">SALES</p>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold">$13.500</span>
        <div className="text-green-500 bg-green-200 rounded-full px-2 py-1 text-xs font-bold ml-2">+36%</div>
      </div>
      <div className="mt-4">
        <Line data={graphData} options={graphOptions} />
      </div>
    </div>
  );
};

export default AcmeAdvancedCard;
