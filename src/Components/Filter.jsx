import React from "react";

import CalendarIcon from "./../assets/icon4.png"; // Replace with your icon path
import FilterIcon from "./../assets/filter.png"; // Replace with your icon path
import AddViewIcon from "./../assets/Shapes.png"; // Replace with your icon path

const Filter = () => {
  return (
    <div className="flex justify-end space-x-1.5 mr-4 pt-3"> {/* Right-align buttons */}
      <button
        // className="text-gray-500 font-semibold py-2 px-4 rounded inline-flex items-center"// Adjust sizes
      >
        <img src={FilterIcon} alt="Filter" className="w-10 h-10  " />
      </button>
      <button
        className="font-semibold py-1 px-2 rounded inline-flex items-center text-sm border border-gray-500"
      >
        <img src={CalendarIcon} alt="Calendar" className="w-4 h-4 mr-2" />
        <span>Nov 20, 2020 - Dec 19, 2020</span>
      </button>
      <button
        className="bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center text-sm"
      >
        <img src={AddViewIcon} alt="Add View" className="w-4 h-4 mr-2" />
        <span>Add View</span>
      </button>
    </div>
  );
};

export default Filter;
