import React from "react";
import CalendarIcon from "./../assets/icon4.png"; // Replace with your icon path
import FilterIcon from "./../assets/filter.png"; // Replace with your icon path
import AddViewIcon from "./../assets/Shapes.png"; // Replace with your icon path

import Arrowdown from "./../assets/arrowIcon1.png";

const Header = () => {
  return (
    <div className="bg-indigo-500 text-white p-3 mt-3 ml-3 mr-4  shadow-md flex justify-between items-center">
      <div className="flex flex-col">

        <h1 className="text-2xl font-bold">
          Good afternoon, Acme Inc.{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className="text-sm pb-1">
          Here is what's happening with your projects today:
        </p>
      </div>
    </div>
  );
};

export default Header;
