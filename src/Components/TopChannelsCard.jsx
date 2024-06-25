import React from 'react';
import githubLogo from './../assets/github.png';  
import twitterLogo from './../assets/twitter.png'; 
import googleLogo from './../assets/icon14.png';   
import vimeoLogo from './../assets/venmo.png';     
import indiehackersLogo from './../assets/Indie.png'; 

const TopChannelsCard = () => {
  const channels = [
    { source: 'Github.com', visitors: '2.4K', revenue: '$3,877', sales: '267', conversion: '4.7%', logo: githubLogo },
    { source: 'Twitter', visitors: '2.2K', revenue: '$3,426', sales: '249', conversion: '4.4%', logo: twitterLogo },
    { source: 'Google (organic)', visitors: '2.0K', revenue: '$2,444', sales: '224', conversion: '4.2%', logo: googleLogo },
    { source: 'Vimeo.com', visitors: '1.9K', revenue: '$2,236', sales: '220', conversion: '4.2%', logo: vimeoLogo },
    { source: 'IndieHackers.com', visitors: '1.7K', revenue: '$2,034', sales: '204', conversion: '3.9%', logo: indiehackersLogo },
  ];

  return (
    <div className="p-6 bg-gray-800 rounded-sm shadow-lg w-full">
      <h2 className="text-base font-normal text-white mb-4">Top Channels</h2>
      <hr className="border-gray-700 my-2 "/>
      <table className="w-full text-center ">
        <thead>
          <tr className="bg-gray-700">
            <th className="text-gray-400 p-2 text-left">SOURCE</th>
            <th className="text-gray-400 p-2">VISITORS</th>
            <th className="text-gray-400 p-2">REVENUE</th>
            <th className="text-gray-400 p-2">SALES</th>
            <th className="text-gray-400 p-2">CONVERSION</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel, index) => (
            <tr key={index} className="border-b border-gray-700">
              <td className="py-2 flex items-center text-white text-left">
                <img src={channel.logo} alt={channel.source} className="w-5 h-5 mr-2" />
                {channel.source}
              </td>
              <td className="py-2 text-gray-400">{channel.visitors}</td>
              <td className="py-2 text-green-400">{channel.revenue}</td>
              <td className="py-2 text-gray-400">{channel.sales}</td>
              <td className="py-2 text-blue-400">{channel.conversion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopChannelsCard;
