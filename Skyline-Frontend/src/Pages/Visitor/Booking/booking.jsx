import React, { useState } from 'react';
import BookingCard from './BookingCard';
import kandy  from'../Booking/BookingCardImg/tour-img01.jpg';
import Galle  from'../Booking/BookingCardImg/tour-img06.jpg';
import Bgbooking from './bg';
import CoverVideo from '../../../Components/Common/CoverVideo';




const Booking = () => {
  const tours = [
    { image: kandy, title: 'Kandy Day Tour', price: 20, rating: null },
    { image: Galle, title: 'Galle Day Tour', price: 35, rating: 5.0 },
   
  ];


 


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
      <div className="flex flex-col">
        <label htmlFor="departing" className="text-gray-700 mb-1">Departing</label>
        <input
          type="date"
          id="departing"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
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
      {tours.map((tour, index) => (
        <BookingCard key={index} {...tour} />
      ))}
    </div>
  </div>
</div>


      
      
    
    </>
  )
}

export default Booking;