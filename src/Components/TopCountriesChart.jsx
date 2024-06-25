import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TopCountriesChart = () => {
  const data = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        data: [35, 35, 30],
        backgroundColor: ['#3730A3', '#0284C7', '#818Cf8'],
        hoverBackgroundColor: ['#4bc0c0', '#9966ff', '#ffcd56'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cutout: '70%', 
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 bg-gray-800 rounded-sm shadow-lg h-full flex flex-col justify-between">
      <h2 className="text-base font-normal text-white mb-4">Top Countries</h2>
      <hr className="border-gray-700  "/>
      <div className="flex-grow flex justify-center items-center">
        <div className="w-48 h-48"> {/* Adjust the width and height here */}
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <div className="flex items-center border px-2 py-1 border-slate-500">
          <span className="w-2 h-2 bg-[#3730A3] mr-2"></span>
          <span className="text-white text-sm">United States</span>
        </div>
        <div className="flex items-center border px-2 py-1 border-slate-500	">
          <span className="w-2 h-2 bg-[#0284C7] mr-2"></span>
          <span className="text-white text-sm">Italy</span>
        </div>
        <div className="flex items-center border px-2 py-1 border-slate-500	">
          <span className="w-2 h-2 bg-[#818Cf8] mr-2"></span>
          <span className="text-white text-sm">Other</span>
        </div>
      </div>
    </div>
  );
};

export default TopCountriesChart;
