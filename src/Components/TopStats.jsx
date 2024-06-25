import React from 'react';
import TopCountriesChart from './TopCountriesChart';
import TopChannelsCard from './TopChannelsCard';

const TopStats = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1">
        <TopCountriesChart />
      </div>
      <div className="md:col-span-2">
        <TopChannelsCard />
      </div>
    </div>
  );
};

export default TopStats;
