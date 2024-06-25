import React from 'react';
import SearchIcon from './../assets/1.png'; // Replace with your icon path
import Message2Icon from './../assets/2.png'; // Replace with your icon path
import ExclamationIcon from './../assets/2.png'; // Replace with your icon path
import MoonIcon from './../assets/icon4.png'; // Replace with your icon path
import ArrowsideIcon from './../assets/arrowIcon1.png'; // Replace with your icon path

const TopHeader = () => {
  return (
    <div className="bg-slate-900 text-white p-4 flex justify-end items-center shadow-md border-b border-slate-700 from-black	">
      <div className="flex items-center space-x-2">
        <img src={SearchIcon} alt="Search" className="w-5 h-5 cursor-pointer" />
        <img src={Message2Icon} alt="Messages" className="w-5 h-5 cursor-pointer relative" />
        <img src={ExclamationIcon} alt="Notifications" className="w-6 h-6 cursor-pointer" />
        <img src={MoonIcon} alt="Theme" className="w-5 h-5 cursor-pointer" />
        <span>|</span>
        <img src={ArrowsideIcon} alt="Profile" className="w-5 h-5 rounded-full" />
        <span>Acme Inc.</span>
      </div>
    </div>
  );
};

export default TopHeader;
