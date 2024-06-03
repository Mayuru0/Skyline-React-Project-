import React from 'react';
import { Link } from 'react-router-dom';
const BookingNavigationBar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div className="flex items-center">
        <span className="text-xl font-semibold">All Bookings</span>
        <div className="ml-2 bg-blue-500 w-2 h-6 rounded-full"></div>
      </div>
      <div className="flex space-x-2 mr-[100px] items-center">
      <Link to="/admin/managebooking">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline"> All Bookings</button>
        </Link>
        <Link to="/admin/waitingbooking">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">Waiting Bookings</button>
        </Link>
        <Link to="/admin/confirmedbooking">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">Confirmed Bookings</button>
        </Link>
        <Link to="/admin/finishedbooking">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">Finished Bookings</button>
        </Link>
        <Link to="/admin/canceledbooking">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full  hover:bg-blue-700  font-bold  focus:outline-none focus:shadow-outline">Canceled Booking</button>
        </Link>
      </div>
     
    </nav>
  );
};

export default BookingNavigationBar;
