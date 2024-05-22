import React, { useState, useMemo ,useEffect} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


import Bgbooking from './Booking/bg';


const PFlightList = () => {


//get flight table
const [flight, setflight] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
  function getflights() {
    axios.get('http://localhost:5000/flightlist/')
      .then((res) => {
          setflight(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(<div> 😡 Error loading Flights List</div>);
      });
  }

  getflights();
}, []);


// Filter flights based on search query
const filteredFlights = flight.filter((flight) =>
flight.departure.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (






    <div className='bg-[url(../src/assets/bg/4k.jpg)] bg-cover bg-no-repeat'>
    
<section className='h-screen'>
        <div className='mt-[130px] mx-4 relative'>
      

      
         

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="pb-4 bg-white dark:bg-blue-950">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative mt-1">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>
            <input type="text" id="table-search" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            
            />
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr >
                <th scope="col" class="p-4">
                   
                </th>
                <th scope="col" class="px-6 py-3">
                    Flight
                </th>
                <th scope="col" class="px-6 py-3">
                    Departure
                </th>
                <th scope="col" class="px-6 py-3">
                    Arrival
                </th>
                <th scope="col" class="px-6 py-3">
                    Scheduled time of departure
                </th>
                <th scope="col" class="px-6 py-3">
                    Scheduled Time of Arrival
                </th>
                <th scope="col" class="px-6 py-3">
                    
                </th>
                
            </tr>
        </thead>
        <tbody>
                {filteredFlights.map((flight, index) => (
                  <tr
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    key={index}
                  >
                    <td class="w-4 p-4">{index + 1}</td>
                    <td>{flight.flightNumber}</td>
                    <td>{flight.departure}</td>
                    <td>{flight.arrival}</td>
                    <td>{flight.timeOfDeparture}</td>
                    <td>{flight.timeOfArrival}</td>
                    <td className="flex gap-6 "> </td>
                  </tr>
                ))}
              </tbody>
       
    </table>
</div>


            
        </div>
    </section>
</div>

        
    
    
    
    
    
    
  
  );
};

export default PFlightList;
