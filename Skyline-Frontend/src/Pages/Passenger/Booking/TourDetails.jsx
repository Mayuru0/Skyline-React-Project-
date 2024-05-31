import React, { useState, useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import useFetch from '../../../Components/hooks/useFetch';
import { BASE_URL } from '../../../Components/Utils/config';
import { useParams } from 'react-router-dom';

const TourDetails = () => {
  const { passenger } = useContext(AuthContext);
  const { id } = useParams();
  const { data: tour, loading, error } = useFetch(`${BASE_URL}tour/get/${id}`);
  console.log(tour);

  // Handle cases where tour data might not be loaded yet
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tour) return <div>No tour data found</div>;

  // Destructure tour data
  const { _id, photo, from, to, flight, departureDate, returnDate, tripType, passengers, economyPrice, businessPrice, description } = tour;

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-4 lg:p-8 -mt-[20px]">
      <div className="lg:w-[400px]">
        <img
          src={photo}
          alt="Tour Image"
          className="rounded-lg mb-4"
        />
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-2">{from} to {to} Tour</h2>
          <p className="text-gray-500">{tripType}</p>
          <p className="text-xl mt-2">${economyPrice} /per Person</p>
          <p className="text-gray-500 mt-1">{passengers} People</p>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TourDetails;
