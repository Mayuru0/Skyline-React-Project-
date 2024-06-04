import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdBlockFlipped } from "react-icons/md";
import { useParams } from 'react-router-dom'
import useFetch from '../../../Components/hooks/useFetch'
import { BASE_URL } from '../../../Components/Utils/config'

const MyBooking = () => {
  const { id } = useParams();
  const { data: booking, loading, error } = useFetch(`${BASE_URL}tourbooks/users/${id}`);
  
  const [currentPage, setCurrentPage] = useState(1);
  const bookingPerPage = 7;

  // Update booking status
  const updateBookingStatus = async (id, status, payment_status, email, firstName, departureDate, from, to, returnDate, flight, totalPrice) => {
    try {
      await axios.put(`http://localhost:5000/tourbooks/update/${id}`, {
        firstName,
        departureDate,
        returnDate,
        from,
        to,
        flight,
        email,
        totalPrice,
        status,
        payment_status,
      });

      toast.success("Booking status updated and email sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error(<div>Error updating booking status</div>);
    }
  };

  const handleConfirmBooking = (id, email, firstName, departureDate, from, to, returnDate, flight, totalPrice) => {
    updateBookingStatus(id, "Confirmed", "Not Paid", email, firstName, departureDate, from, to, returnDate, flight, totalPrice);
  };

  const handleCancelBooking = (id, email, firstName, departureDate, from, to, returnDate, flight, totalPrice) => {
    updateBookingStatus(id, "Cancelled", "Not Paid", email, firstName, departureDate, from, to, returnDate, flight, totalPrice);
  };

  // Pagination
  const indexOfLastBooking = currentPage * bookingPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingPerPage;
  const currentBookings = booking?.slice(indexOfFirstBooking, indexOfLastBooking) || [];
  const totalPages = Math.ceil(booking?.length / bookingPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading bookings</div>;

  return (
    <div className='mt-[200px]'>

      {/* Table */}
      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">#</th>
              <th scope="col" className="px-6 py-3 text-center">From</th>
              <th scope="col" className="px-6 py-3 text-center">To</th>
              <th scope="col" className="px-6 py-3 text-center">Flight</th>
              <th scope="col" className="px-6 py-3 text-center">Departure Date</th>
              <th scope="col" className="px-6 py-3 text-center">Return Date</th>
              <th scope="col" className="px-6 py-3 text-center">Type</th>
              <th scope="col" className="px-6 py-3 text-center">Passengers</th>
              <th scope="col" className="px-6 py-3 text-center">Class Type</th>
              <th scope="col" className="px-6 py-3 text-center">Total Price</th>
              <th scope="col" className="px-6 py-3 text-center">Status</th>
              <th scope="col" className="px-6 py-3 text-center">Payment Status</th>
              <th scope="col" className="px-6 py-3 text-center">Option</th>
            </tr>
          </thead>
          <tbody>
            {currentBookings.map((booking, index) => (
              <tr key={booking._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-center">{index + 1}</td>
                <td className="px-6 py-4 text-center">{booking.from}</td>
                <td className="px-6 py-4 text-center">{booking.to}</td>
                <td className="px-6 py-4 text-center">{booking.flight}</td>
                <td className="px-6 py-4 text-center">{booking.departureDate}</td>
                <td className="px-6 py-4 text-center">{booking.returnDate}</td>
                <td className="px-6 py-4 text-center">{booking.tripType}</td>
                <td className="px-6 py-4 text-center">{booking.passengers}</td>
                <td className="px-6 py-4 text-center">{booking.classtype}</td>
                <td className="px-6 py-4 text-center">{booking.totalPrice}</td>
                <td className="px-6 py-4 text-center text-red-600">{booking.status}</td>
                <td className="px-6 py-4 text-center text-red-600">{booking.payment_status}</td>
                <td className="flex gap-2 ml-4 mt-3 ">
                  <MdBlockFlipped
                    className="text-3xl px-1 py-1 cursor-pointer text-white bg-gray-600 rounded-lg mt-3 hover:bg-gray-700 mr-3"
                    title="Cancel Booking"
                    onClick={() => handleCancelBooking(booking._id, booking.email, booking.firstName, booking.departureDate, booking.from, booking.to, booking.returnDate, booking.flight, booking.totalPrice)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MyBooking;
