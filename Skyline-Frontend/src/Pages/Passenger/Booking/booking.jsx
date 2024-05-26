import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Bgbooking from './bg';
import CoverVideo from '../../../Components/Common/CoverVideo';
import { FaCalendarAlt } from 'react-icons/fa';
import TourCard from "./TourCard";

const Booking = () => {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  // Get Tours
  useEffect(() => {
    function getTours() {
      axios
        .get("http://localhost:5000/tour/")
        .then((res) => {
          setTours(res.data);
          setFilteredTours(res.data); // Set filteredTours initially
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div>😡 Error loading User Tours</div>);
        });
    }

    getTours();
  }, []);

  const [Countriesfrom, setCountryfrom] = useState([]);
  const [selectedCountryfrom, setSelectedCountryfrom] = useState("");
  const [Countriesto, setCountryto] = useState([]);
  const [selectedCountryto, setSelectedCountryto] = useState("");
  const [tripType, setTripType] = useState('Round-Trip');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  //const [travelClass, setTravelClass] = useState('Economy Class');

  // Get airports
  useEffect(() => {
    axios
      .get("http://localhost:5000/airport/")
      .then((response) => {
        setCountryfrom(response.data);
        setCountryto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching airports:", error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = tours.filter((tour) => {
      return (
        (selectedCountryfrom === "" || tour.from === selectedCountryfrom) &&
        (selectedCountryto === "" || tour.to === selectedCountryto) &&
        (tripType === "" || tour.tripType === tripType) &&
        (departureDate === "" || tour.departureDate === departureDate) &&
        (returnDate === "" || tour.returnDate === returnDate) &&
      //  (travelClass === "" || travelClass === "Economy Class" ? tour.economyPrice : tour.businessPrice) &&
        (passengers === 1 || tour.passengers >= passengers)
      );
    });

    setFilteredTours(filtered);
  };

  return (
    <> 
      <div className="pb-[1500px]">
        <div className='mt-[130px]'>
          <CoverVideo />
        </div>

        {/* searchBar */}
        <div className='w-full overflow-hidden relative'>
          <div className="mt-2 flex items-center justify-center relative z-10">
            <form 
              className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-4"
              onSubmit={handleSearch}
            >
              <div className="flex flex-col">
                <label htmlFor="departure" className="text-gray-700 mb-1">Departure airport</label>
                <select
                  id="departure"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={selectedCountryfrom}
                  onChange={(e) => setSelectedCountryfrom(e.target.value)}
                >
                  <option value="">Select</option>
                  {Countriesfrom.map((country) => (
                    <option key={country._id} value={country.airportName}>
                      {country.airportName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="arrival" className="text-gray-700 mb-1">Arrival airport</label>
                <select
                  id="arrival"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={selectedCountryto}
                  onChange={(e) => setSelectedCountryto(e.target.value)}
                >
                  <option value="">Select</option>
                  {Countriesto.map((country) => (
                    <option key={country._id} value={country.airportName}>
                      {country.airportName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className='max-w-lg mx-auto'>
                  <div className="flex items-center">
                    <label className="flex items-center mr-4">
                      <input
                        type="radio"
                        name="tripType"
                        value="Round-Trip"
                        checked={tripType === 'Round-Trip'}
                        onChange={() => setTripType('Round-Trip')}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">Round Trip</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="tripType"
                        value="One-Way"
                        checked={tripType === 'One-Way'}
                        onChange={() => setTripType('One-Way')}
                        className="form-radio text-blue-600"
                      />
                      <span className="ml-2 text-gray-700">One Way</span>
                    </label>
                  </div>
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
                          disabled={tripType === 'One-Way'}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="passengers" className="text-gray-700 mb-1">Passengers</label>
                <select
                  id="passengers"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                >
                  <option value={1}>1 Passenger</option>
                  <option value={2}>2 Passengers</option>
                  <option value={3}>3 Passengers</option>
                  <option value={4}>4 Passengers</option>
                </select>
              </div>
              {/*
              <div className="flex flex-col">
                <label htmlFor="class" className="text-gray-700 mb-1">Class</label>
                <select
                  id="class"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  value={travelClass}
                  onChange={(e) => setTravelClass(e.target.value)}
                >
                  <option value="Economy Class">Economy Class</option>
                  <option value="Business Class">Business Class</option>
                </select>
              </div> 
                */}
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


          {/* bg video */}
          <Bgbooking />

          {/* Card */}
          <div className="container mx-auto px-4 relative z-10" data-aos="fade-right" data-aos-duration='1600'>
            <h1 className="text-4xl font-bold my-8">Featured Destinations</h1>
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
                {filteredTours.map((tour) => (
                  <div key={tour.id} className="p-4" data-aos="zoom-in" data-aos-duration='1600'>
                    <TourCard
                      from={tour.from}
                      to={tour.to}
                      flight={tour.flight}
                      departureDate={tour.departureDate}
                      returnDate={tour.returnDate}
                      tripType={tour.tripType}
                      passengers={tour.passengers}
                      economyPrice={tour.economyPrice}
                      businessPrice={tour.businessPrice}
                      photo={tour.photo}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 mt-8 text-2xl   " >
                No tours available 
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
