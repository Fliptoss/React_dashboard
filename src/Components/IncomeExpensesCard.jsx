import React from 'react';
import qontoIcon from './../assets/Icon8.png';
import appComIcon from './../assets/Icon9.png'; 
import notionIcon from './../assets/Icon9.png';
import marketCapIcon from './../assets/Icon9.png'; 
import appComIcon2 from './../assets/icon10.png';
import cruipIcon from './../assets/Icon8.png'; 


const IncomeExpensesCard = () => {
  const transactions = [
    { description: <span><strong>Qonto</strong> billing</span>, amount: '-$49.88', type: 'expense', icon: qontoIcon },
    { description: <span><strong>App.com </strong> Market Ltd 70 Wilson St London</span> ,amount: '+$249.88', type: 'income', icon: appComIcon },
    { description: <span><strong>Notion Labs Inc</strong></span>, amount: '-$99.00', type: 'expense', icon: notionIcon },
    { description: <span><strong>Market Cap Ltd'</strong></span>, amount: '+$1,200.00', type: 'income', icon: marketCapIcon },
    { description: <span><strong>App.com</strong> Market Ltd 70 Wilson St London</span>, amount: '+$99.00', type: 'income', icon: appComIcon2 },
    { description: <span><strong>Cruip.com</strong> Market Ltd 70 Wilson St London</span>, amount: '-$49.88', type: 'expense', icon: cruipIcon },
  ];

  return (
    <div className="bg-gray-800 rounded-sm shadow-lg  text-sm">
      <h2 className="pt-4 pl-4 text-lg font-normal text-white mr-2">Income/Expenses</h2>
      <hr className="border-gray-700 my-2" />
      
      <div className="bg-gray-700 p-2 text-slate-400 font-thin ml-4 mr-4 flex justify-between">
        <span>Today</span>
        <span>Amount</span>
      </div>
      <ul className="text-gray-400 p-2">
        {transactions.map((transaction, index) => (
          <li key={index} className={`flex justify-between items-center p-2 ${index < transactions.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <div className="flex items-center">
              <img src={transaction.icon} alt={transaction.description} className="w-6 h-6 mr-4 ml-4" />
              <span>{transaction.description}</span>
            </div>
            <span className={`font-semibold pr-2 ${transaction.type === 'income' ? 'text-green-400' : 'text-white-400'}`}>
              {transaction.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeExpensesCard;



