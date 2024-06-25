import React from 'react';
import mentionIcon from './../assets/Icon15.png'; // Replace with your icon path
import removeIcon from './../assets/icon14.png'; // Replace with your icon path
import publishIcon from './../assets/icon13.png'; // Replace with your icon path
import subscribeIcon from './../assets/icon12.png'; // Replace with your icon path
import suspendIcon from './../assets/Icon15.png'; // Replace with your icon path

const RecentActivityCard = () => {
  const activities = {
    today: [
      { activity: <span><strong>Nick Mark</strong> mentioned <strong>Sara Smith</strong> in a new post</span>, type: 'mention', icon: mentionIcon },
      { activity: <span>The post <strong>Post Name</strong> was removed by <strong>Nick Mark</strong></span>, type: 'remove', icon: removeIcon },
      { activity: <span><strong>Patrick Sullivan</strong> published a new post</span>, type: 'publish', icon: publishIcon },
    ],
    yesterday: [
      { activity: <span><strong>240+</strong> users have subscribed to <strong>Newsletter #1</strong></span>, type: 'subscribe', icon: subscribeIcon },
      { activity: <span>The post <strong>Post Name</strong> was suspended by <strong>Nick Mark</strong></span>, type: 'suspend', icon: suspendIcon },
    ]
  };

  return (
    <div className="bg-gray-800 rounded-sm shadow-lg pb-4 text-sm">
      <h2 className="pt-4 pl-4 text-lg font-normal text-white mr-2">Recent Activity</h2>
      <hr className="border-gray-700 my-2" />

      <div className="mb-4">
        <div className="bg-gray-700 p-2 text-slate-400 font-thin ml-4 mr-4">Today</div>
        {activities.today.map((activity, index) => (
          <div key={index} className={`flex justify-between items-start p-2 ${index < activities.today.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <div className="flex items-center">
              <img src={activity.icon} alt={activity.type} className="w-5 h-5 mr-4 ml-4" />
              <div className='font-light'>{activity.activity}</div>
            </div>
            <div>
              <a href="#" className="text-blue-400 hover:underline mt-2 ml-4 mr-4">View</a>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="bg-gray-700 p-2 text-slate-400 font-thin ml-4 mr-4">Yesterday</div>
        {activities.yesterday.map((activity, index) => (
          <div key={index} className={`flex justify-between items-start p-2 ${index < activities.yesterday.length - 1 ? 'border-b border-gray-700' : ''}`}>
            <div className="flex items-center">
              <img src={activity.icon} alt={activity.type} className="w-5 h-5 mr-4 ml-4" />
              <div className='font-light'>{activity.activity}</div>
            </div>
            <div>
              <a href="#" className="text-blue-400 hover:underline mt-2 ml-4 mr-4">View</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
