import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";

const RePassengers = () => {
  const [passengers, setPassengers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    function getPassengers() {
      axios.get('http://localhost:5000/register/')
        .then((res) => {
          setPassengers(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div>  Error  load registering user</div>);
        });
    }

    getPassengers();
  }, []);

  // Filter passengers based on search query
  const filteredPassengers = passengers.filter((passenger) =>
    passenger.firstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Delete passenger
  const deletePassenger = (id, firstName) => {
    if (window.confirm(`Are you sure you want to delete ${firstName}`)) {
      axios
        .delete(`http://localhost:5000/register/delete/${id}`)
        .then(() => {
          // Optional: Provide feedback to the user
          toast.success(<div>  Passenger deleted successfully!</div>);
          // Optional: Update the passenger list after deletion
          setPassengers(passengers.filter(p => p._id !== id));
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div>  Error deleting passenger</div>);
        });
    }
  };

  return (
    <div className="">
      <div className="py-[25px] px-[25px] bg-slate-100 mt-2 ">
        <h1 className="text-black text-[28px] leading-[40px] cursor-pointer font-semibold">
          Registered Passengers
        </h1>
      </div>
      <div className='-mt-20'>
        <section className="">
          <div className="mt-[130px] mx-4 relative">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="pb-4 bg-white dark:bg-blue-950">
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search"
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-blue-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-6 py-3">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Gender
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Passport Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPassengers.map((passenger, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={index}
                    >
                      <td className="w-4 p-4">{index + 1}</td>
                      <td>{passenger.firstName}</td>
                      <td>{passenger.lastName}</td>
                      <td>{passenger.gender}</td>
                      <td>{passenger.country}</td>
                      <td>{passenger.address}</td>
                      <td>{passenger.passportNo}</td>
                      <td>{passenger.phone}</td>
                      <td>{passenger.email}</td>
                      <td className="flex gap-6">
                        <MdDelete
                          className="text-3xl px-1 py-1 cursor-pointer text-white bg-red-600 rounded-lg hover:bg-red-700 mt-3 mr-3"
                          onClick={() => deletePassenger(passenger._id, passenger.firstName)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RePassengers;
