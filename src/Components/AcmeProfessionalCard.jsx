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
import professionalIcon from './../assets/arrowIcon3.png';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const AcmeProfessionalCard = () => {
  const graphData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Sales',
        data: [45, 39, 60, 51, 36, 35, 20],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
      {
        label: 'Revenue',
        data: [55, 49, 70, 61, 46, 45, 30],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
      },
      {
        label: 'Profit',
        data: [35, 29, 50, 41, 26, 25, 10],
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
        <img src={professionalIcon} alt="Acme Professional" className="w-5 h-5" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Acme Professional</h2>
          <p className="text-gray-400">SALES</p>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-xl font-bold">$8.200</span>
        <div className="text-green-500 bg-green-200 rounded-full px-2 py-1 text-xs font-bold ml-2">+22%</div>
      </div>
      <div className="mt-4">
        <Line data={graphData} options={graphOptions} />
      </div>
    </div>
  );
};

export default AcmeProfessionalCard;
