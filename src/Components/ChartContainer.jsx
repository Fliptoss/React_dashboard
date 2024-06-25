import React from 'react';
import DirectVsIndirect from './DirectVsIndirect';
import AvgOrderValueChart from './AvgOrderValueChart';

const ChartContainer = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <DirectVsIndirect />
      <AvgOrderValueChart />
    </div>
  );
};

export default ChartContainer;
