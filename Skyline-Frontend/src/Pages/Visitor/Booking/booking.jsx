import React, { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import Bgbooking from './bg';
import CoverVideo from '../../../Components/Common/CoverVideo';

import { FaCalendarAlt } from 'react-icons/fa';
import TourCard from "./TourCard";


const Booking = () => {
  const [tours, setTours] = useState([]);

  // Get Tours
  useEffect(() => {
    function getTours() {
      axios
        .get("http://localhost:5000/tour/")
        .then((res) => {
          setTours(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div>😡 Error loading User Tours</div>);
        });
    }

    getTours();
  }, []);


  const [tripType, setTripType] = useState('roundTrip');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');


  return (
    <> 
    <div className='mt-[130px]'>
     <CoverVideo/>
   </div>



     {/*searchBar*/}
   
     <div className='w-full h-screen overflow-hidden relative'>
  <div className="mt-2 flex items-center justify-center relative z-10">
    <form className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col">
        <label htmlFor="departure" className="text-gray-700 mb-1">Departure airport</label>
        <input
          type="text"
          id="departure"
          placeholder="Select Departure airport"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="arrival" className="text-gray-700 mb-1">Arrival airport</label>
        <input
          type="text"
          id="arrival"
          placeholder="Select Arrival airport"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* 
      <div className="flex flex-col">
        <label htmlFor="departing" className="text-gray-700 mb-1">Departing</label>
        <input
          type="date"
          id="departing"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>*/}

      <div >
        
      <div className='max-w-lg mx-auto  '>
      <div className="flex items-center ">
        <label className="flex items-center mr-4 ">
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={() => setTripType('roundTrip')}
            className="form-radio text-blue-600"
          />
          <span className="ml-2 text-gray-700">Round Trip</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="oneWay"
            checked={tripType === 'oneWay'}
            onChange={() => setTripType('oneWay')}
            className="form-radio text-blue-600"
          />
          <span className="ml-2 text-gray-700">One Way</span>
        </label>
      </div>
      <div className="flex justify-between items-center border border-gray-300 rounded-md p-2 ">
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-500" />
          <div className="ml-2">
            <div className="text-xs text-gray-500">Departure</div>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="text-black text-lg font-medium"
            />
          </div>
        </div>
        <div className="mx-4">↔</div>
        <div className="flex items-center">
          <FaCalendarAlt className="text-gray-500" />
          <div className="ml-2">
            <div className="text-xs text-gray-500">Return</div>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="text-black text-lg font-medium"
              disabled={tripType === 'oneWay'}
            />
          </div>
        </div>
      </div>
     
</div></div>
      
      <div className="flex flex-col">
        <label htmlFor="passengers" className="text-gray-700 mb-1">Passengers</label>
        <select
          id="passengers"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option>1 Passenger</option>
          <option>2 Passengers</option>
          <option>3 Passengers</option>
          <option>4 Passengers</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="class" className="text-gray-700 mb-1">Class</label>
        <select
          id="class"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option>Economy Class</option>
          <option>Business Class</option>
        </select>
      </div>
      <div className='flex flex-col'>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition-colors duration-300 mt-7"
        >
          Search flights
        </button>
      </div>
    </form>
  </div>

 <Bgbooking/>


{/*Card*/}
  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-4xl font-bold my-8">Featured Destinations</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {tours.map((tour) => (
        <div key={tour.id} className="p-4">
          <TourCard
            image={tour.photo}
            title={tour.from}
            price={tour.economyPrice}
            rating={tour.flight}
          />
        </div>
      ))}
    </div>
  </div>
</div>


      
      
    
    </>
  )
}

export default Booking;