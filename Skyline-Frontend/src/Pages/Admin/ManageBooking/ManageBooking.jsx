import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaEdit, FaRegCalendarAlt } from "react-icons/fa";
import { MdAlarm, MdDelete } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

const ManageBooking = () => {
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [flight, setflight] = useState("");
  const [economyPrice, seteconomyPrice] = useState("");
  const [busineessPrice, setbusineessPrice] = useState("");
// For editing
const [editData, setEditData] = useState(null);
const [booking, setbooking] = useState([]);

  //Add booking
  const handleSubmit = (e) => {
    e.preventDefault();
    if (from === "") {
      toast.error(" From is required", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
    } else if (to === "") {
      toast.error(" To is required", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
    } else if (flight === "") {
      toast.error(" Flight is required", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
    } else if (economyPrice === "") {
      toast.error(" Economy Class Price is required", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
    } else if (busineessPrice === "") {
      toast.error(" Busineess Class Price is required", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
    } else {
      toast.success(" 😊 All fields are valid!", {
        // position: "top-center",
         autoClose: 1000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
       });
      sendData();
    }
  };

  const sendData = () => {
    const newbook = {
      from,
      to,
      flight,
      economyPrice,
      busineessPrice,
    };

    axios
      .post("http://localhost:5000/booklist/add", newbook)
      .then(() => {
        toast.success(<div> 😊 Book Add Successful!</div>);
        setfrom("");
        setto("");
        setflight("");
        seteconomyPrice("");
        setbusineessPrice("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(<div> 😡 Book Add Error</div>);
      });
  };


//paginatiom
  const [Books, setbook] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredbooks = Books.filter((book) =>
    book.from.toLowerCase().includes(searchQuery.toLowerCase())
  );
//pagination
  const totalPages = Math.ceil(filteredbooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBooks = filteredbooks.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  //get book list
  useEffect(() => {
    function getbooks() {
      axios
        .get("http://localhost:5000/booklist/")
        .then((res) => {
          setbook(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div> 😡 Error load registering user</div>);
        });
    }

    getbooks();
  }, []);



  //delete book
  const DeleteBook = (id, from) => {
    if (window.confirm(`Are you sure you want to delete ${from}`)) {
      axios
        .delete(`http://localhost:5000/booklist/delete/${id}`)
        .then(() => {
          toast.success(" 😊 Book deleted successfully!", {
            // position: "top-center",
             autoClose: 1000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined
           });
          setbook(Books.filter((f) => f._id !== id));
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div> 😡 Error deleting book</div>);
        });
    }
  };

  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState("");

  //get flightlist
  useEffect(() => {
    axios
      .get("http://localhost:5000/flightlist/")
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error("Error fetching flights:", error);
      });
  }, []);

  const [Countriesfrom, setCountryfrom] = useState([]);
  const [selectedCountryfrom, setSelectedCountryfrom] = useState("");

  //getCountry
  useEffect(() => {
    axios
      .get("http://localhost:5000/countries/")
      .then((response) => {
        setCountryfrom(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Country:", error);
      });
  }, []);

  const [Countriesto, setCountryto] = useState([]);
  const [selectedCountryto, setSelectedCountryto] = useState("");

//getCountry
  useEffect(() => {
    axios
      .get("http://localhost:5000/countries/")
      .then((response) => {
        setCountryto(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Country:", error);
      });
  }, []);





// Edit Booking
  const handleEdit = (book) => {
    setEditData(book);
  };

  const handleUpdate = () => {
    // Axios update request
    axios
      .put(`http://localhost:5000/booklist/update/${editData._id}`, editData)
      .then(() => {
        toast.success(" 😊 Booking updated successfully!", {
          // position: "top-center",
           autoClose: 1000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined
         });
        setEditData(null);

        axios.get("http://localhost:5000/booklist/").then((res) => {
          setbooking(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(<div>😡 Error updating Booking</div>);
      });
  };



  //view options
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAirplanesClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
         {/* Modal form for editing */}
      {editData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4 bg-[#1F3541] text-white text-center rounded-lg flex items-center justify-center">
              {" "}
              <FaEdit className="w-6 h-6  mr-2  " />Edit Country</h2>

              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                From
              </label>
            <select
              type="text"
              className="p-2 mb-2 w-full  shadow appearance-none border rounded-md leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
              value={editData.from}
              onChange={(e) =>{
                setEditData({ ...editData, from: e.target.value })
                setSelectedCountryfrom(e.target.value);
              }}
             ><option value="">Select</option>
             {Countriesfrom.map((country) => (
               <option key={country._id} value={country.Country}>
                 {country.Country}
               </option>
             ))}
           </select>




            
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                To
              </label>
            <select
              type="text"
              className="p-2 mb-2 w-full  shadow appearance-none border rounded-md leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
              value={editData.to}
              onChange={(e) =>{
                setEditData({ ...editData, to: e.target.value })
                setSelectedCountryto(e.target.value);
              }}
            ><option value="">Select</option>
            {Countriesto.map((country) => (
              <option key={country._id} value={country.Country}>
                {country.Country}
              </option>
            ))}
          </select>
           
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Flight
              </label>
            <select
              type="text"
              className="p-2 mb-2 w-full  shadow appearance-none border rounded-md leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
              value={editData.flight}
              onChange={(e) =>{
                setEditData({ ...editData, flight: e.target.value })
                setSelectedFlight(e.target.value);
              }}
            ><option value="">Choose a flight</option>
                {flights.map((flight) => (
                  <option key={flight._id} value={flight.flightNumber}>
                    {flight.flightNumber}
                  </option>
                ))}
              </select>
            
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Economy Class Price
              </label>
            <input
              type="text"
              className="p-2 mb-2 w-full  shadow appearance-none border rounded-md leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
              value={editData.economyPrice}
              onChange={(e) =>
                setEditData({ ...editData, economyPrice: e.target.value })
              }
            />
            
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="country"
              >
                Busineess Class Price
              </label>
            <input
              type="text"
              className="p-2 mb-2 w-full  shadow appearance-none border rounded-md leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
              value={editData.busineessPrice}
              onChange={(e) =>
                setEditData({ ...editData, busineessPrice: e.target.value })
              }
            />






            <button
             className="mr-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700"
              onClick={() => setEditData(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/*from*/}
      <div className="mx-auto shadow-md rounded-md p-6 mt-8 bg-slate-100 ">
        <div className="py-[10px] px-[10px] bg-[#1F3541] border rounded-3xl flex items-center justify-center mb-10">
          <h1 className="text-white text-[28px] leading-[40px] cursor-pointer font-semibold text-center flex ">
            <FaRegCalendarAlt className="mr-2 w-8 h-8" />
            Manage Booking
          </h1>
        </div>
        <div className="mx-auto mt-10 px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="flight"
              >
                From
              </label>
              <select
                id="From"
                className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedCountryfrom}
                onChange={(e) => {
                  setSelectedCountryfrom(e.target.value);
                  setfrom(e.target.value);
                }}
              >
                <option value="">Select</option>
                {Countriesfrom.map((country) => (
                  <option key={country._id} value={country.Country}>
                    {country.Country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="departure"
              >
                To
              </label>
              <select
                id="To"
                className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedCountryto}
                onChange={(e) => {
                  setSelectedCountryto(e.target.value);
                  setto(e.target.value);
                }}
              >
                <option value="">Select</option>
                {Countriesto.map((country) => (
                  <option key={country._id} value={country.Country}>
                    {country.Country}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="flights"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Select a flight
              </label>
              <select
                id="flights"
                className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={selectedFlight}
                onChange={(e) => {
                  setSelectedFlight(e.target.value);
                  setflight(e.target.value);
                }}
              >
                <option value="">Choose a flight</option>
                {flights.map((flight) => (
                  <option key={flight._id} value={flight.flightNumber}>
                    {flight.flightNumber}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="arrival-time"
              >
                Economy Class Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Economy Class Price"
                onChange={(e) => seteconomyPrice(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="arrival-time"
              >
                Busineess Class Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Busineess Class Price"
                onChange={(e) => setbusineessPrice(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="text-end">
            <button
              onClick={handleViewAirplanesClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              View Booking
            </button>
          </div>
        </div>
      </div>

      {/*table*/}

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-300 p-12 shadow-md relative w-auto border rounded-3xl">
            <AiFillCloseCircle
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 w-10 h-10"
            />
            <h2 className="text-2xl font-bold mb-4 bg-[#1F3541] text-white border rounded-full text-center flex items-center justify-center">
              Booking List
              <FaRegCalendarAlt className="ml-2" />
            </h2>
            <section className="">
              <div className="mt-[13px] mx-4 relative">
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
                          From
                        </th>
                        <th scope="col" className="px-6 py-3">
                          To
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Flight
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Economy Class Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Busineess Class Price
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentBooks.map((books, index) => (
                        <tr
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          key={index}
                        >
                          <td className="w-4 p-4">{index + 1 + startIndex}</td>
                          <td>{books.from}</td>
                          <td>{books.to}</td>
                          <td>{books.flight}</td>
                          <td>{books.economyPrice}</td>
                          <td>{books.busineessPrice}</td>
                          <td className="flex gap-6">
                            <FaEdit className="w-7 h-7 mt-2 cursor-pointer text-green-700 hover:text-green-500 ml-7" 
                            onClick={() => handleEdit(books)}/>
                            
                            <MdDelete
                              className="w-7 h-7 mt-2 cursor-pointer text-red-700 hover:text-red-500 mr-3"
                              onClick={() => DeleteBook(books._id, books.from)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between mt-4 ">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 ${
                        currentPage === 1
                          ? "cursor-not-allowed bg-gray-300"
                          : "bg-blue-500 hover:bg-blue-700"
                      } text-white font-bold rounded`}
                    >
                      Previous
                    </button>
                    <span className="text-gray-700">
                    Page {currentPage} of {totalPages}
                  </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 ${
                        currentPage === totalPages
                          ? "cursor-not-allowed bg-gray-300"
                          : "bg-blue-500 hover:bg-blue-700"
                      } text-white font-bold rounded`}
                    >
                      Next
                    </button>
                 
                  
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBooking;
