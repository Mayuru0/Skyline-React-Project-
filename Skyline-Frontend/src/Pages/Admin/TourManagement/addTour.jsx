import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbTournament } from "react-icons/tb";
const AddTour = () => {
  const [tripType, setTripType] = useState('roundTrip');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
    <div className="max-w-screen-2xl shadow-2xl rounded-3xl mx-auto p-4">
       <div  className="py-[10px] px-[10px] bg-[#1F3541] border rounded-3xl   flex items-center  justify-center mb-10" >
      <h2 className="text-white text-[28px] leading-[40px] cursor-pointer font-semibold  text-center flex ">
        Add New Booking
        <TbTournament className="ml-4 w-10 h-10" />
      </h2></div>
      <form  className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm  font-semibold text-gray-700 ">From </label>
          <input
            type="text"
            name="title"
           
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Tour Title"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700">To </label>
          <input
            type="text"
            name="title"
           
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Tour Title"
          />
        </div>
        </div>



        <div className="  grid grid-cols-2 gap-4">
      <div className="max-w-lg  p-4 flex  -m-4">
     
        
      <div className="flex justify-between items-center border border-gray-300 rounded-md p-2">
      
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
      <div className="flex items-center mt-4 ml-24">
        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="tripType"
            value="roundTrip"
            checked={tripType === 'roundTrip'}
            onChange={() => setTripType('roundTrip')}
            className="form-radio text-blue-600"
          />
          <span className="ml-2 text-gray-700 ">Round Trip</span>
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
    </div>



     
          <div>
            <label className="block text-sm font-semibold text-gray-700">Passengers</label>
            <select
              type="text"
              name="Passengers"
            
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Passengers"
            >
              <option>Choose Class</option>
              <option>1 Passengers</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4 Passengers</option>
              <option>5 Passengers</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700"> Choose Class</label>
            <select
              type="text"
              name="Class"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Nights"
            >
                <option> Class </option>
                <option>Economic </option>
              <option> Business</option>
          
            </select>


          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Price $</label>
            <input
              type="number"
              name="price"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Price"
            />
          </div>

          <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            rows={10}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-4"
            placeholder="Description of the tour"
          ></textarea>
        </div>
         
        
     

        <div className=" w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 ">Upload Photo</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="mb-4 text-gray-500">Drop files here</p>
          <input type="file" id="file-upload" className="hidden" />
          <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600">
            Choose File
          </label>
          <p className="mt-2 text-gray-500">No file chosen</p>
        </div>
      </div></div>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTour;
