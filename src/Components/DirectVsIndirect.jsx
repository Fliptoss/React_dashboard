import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const DirectVsIndirect = () => {
  const data = {
    labels: ['Dec 20', 'Jan 21', 'Feb 21', 'Mar 21', 'Apr 21', 'May 21'],
    datasets: [
      {
        label: 'Direct',
        backgroundColor: '#4bc0c0',
        borderColor: '#4bc0c0',
        borderWidth: 1,
        hoverBackgroundColor: '#4bc0c0',
        hoverBorderColor: '#4bc0c0',
        data: [1700, 5100, 2900, 1200, 3100, 2100]
      },
      {
        label: 'Indirect',
        backgroundColor: '#9966ff',
        borderColor: '#9966ff',
        borderWidth: 1,
        hoverBackgroundColor: '#9966ff',
        hoverBorderColor: '#9966ff',
        data: [2400, 2600, 5300, 2800, 4500, 3000]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        // grid: {
        //   color: '#303030',
        // },
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
            return `$${value / 1000}K`; // Convert to thousands
          }
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
    <div className=" bg-gray-800 rounded-sm shadow-lg">
      <div className="mb-4">
        <h2 className="pt-4 pl-4 pb-2 text-lg font-normal text-white">Direct VS Indirect</h2>
        <hr className="border-gray-700 my-2 "/>
        <div className="flex space-x-6">
          <div className="pl-4 flex items-baseline">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="ml-1 text-2xl font-bold text-white">$1.7K</span>
            <span className="text-gray-400 ml-2">Direct</span>
          </div>
          <div className="flex items-baseline">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="ml-1 text-2xl font-bold text-white">$2.4K</span>
            <span className="text-gray-400 ml-2">Indirect</span>
          </div>
        </div>
      </div>
      <div className=" pt-1 pl-4 pb-6 h-64 mr-4">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DirectVsIndirect;
