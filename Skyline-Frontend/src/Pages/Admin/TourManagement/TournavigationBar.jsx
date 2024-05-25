import React from 'react';
import { Link } from 'react-router-dom';
const TourNavigationBar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div className="flex items-center">
        <span className="text-xl font-semibold">Total Tours</span>
        <div className="ml-2 bg-blue-500 w-2 h-6 rounded-full"></div>
      </div>
      <div className="flex space-x-2">
      <Link to="/admin/allTours">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline"> All Tours</button>
        </Link>
        <Link to="/admin/economyTours">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">One-Way Tours</button>
        </Link>
        <Link to="/admin/businesTours">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">Round-Trip Tours</button>
        </Link>
      </div>
      <Link to="/admin/addTour">
      <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">+ Add Tour</button>
      </Link>
    </nav>
  );
};

export default TourNavigationBar;
