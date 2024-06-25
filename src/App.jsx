import React from 'react';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Filter from './Components/Filter';
import TopHeader from './Components/TopHeader';
import CardsContainer from './Components/CardsContainer';
import ChartContainer from './Components/ChartContainer';
import TopStats from './Components/TopStats';
import SalesOverTimeChart from './Components/SalesOverTimeChart';
import SalesVsRefundsChart from './Components/SalesVsRefundsChart';
import RecentActivityCard from './Components/RecentActivityCard';
import IncomeExpensesCard from './Components/IncomeExpensesCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-1000 text-white flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-gray-900 min-h-screen">
        <TopHeader/>
        <Header />
        <div>
          <Filter/>
        </div>
        <CardsContainer/>
        <ChartContainer />
        <TopStats/>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <SalesOverTimeChart />
          <SalesVsRefundsChart />
        </div>
        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <RecentActivityCard />
          <IncomeExpensesCard /> 
        </div>
      </main>
    </div>
  );
}

export default App;
