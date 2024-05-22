import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdDelete } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { TbMessage } from "react-icons/tb";

const FeedbackModal = ({ feedback, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-1/2">
        <h1 className="text-xl font-bold mb-4">{feedback.name}</h1>
        <h2 className="text-xl font-bold mb-4">{feedback.subject}</h2>
        <p className="mb-4">{feedback.message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const RePassengers = () => {
  const [feedback, setFeedback] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    function getFeedback() {
      axios.get('http://localhost:5000/feedback/')
        .then((res) => {
          setFeedback(res.data);
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div> 😡 Error loading User Feedback</div>);
        });
    }

    getFeedback();
  }, []);

  const filteredFeedback = feedback.filter((Feedback) =>
    Feedback.email && Feedback.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFeedback.length / itemsPerPage);

  const currentFeedback = filteredFeedback.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const deleteFeedback = (id, email) => {
    if (window.confirm(`Are you sure you want to delete feedback from ${email}`)) {
      axios
        .delete(`http://localhost:5000/feedback/delete/${id}`)
        .then(() => {
          toast.success(<div> 😊 Feedback deleted successfully!</div>);
          setFeedback(feedback.filter(p => p._id !== id));
        })
        .catch((err) => {
          console.log(err);
          toast.error(<div> 😡 Error deleting Feedback</div>);
        });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleViewClick = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const handleCloseModal = () => {
    setSelectedFeedback(null);
  };

  return (
    <div className="">
      <div className="py-[25px] px-[25px] bg-slate-100 mt-2 ">
        <h1 className="text-black text-[28px] leading-[40px] cursor-pointer font-semibold">
          User Feedback
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
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Messages
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentFeedback.map((Feedback, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={Feedback._id}
                    >
                      <td className="w-4 p-4">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                      <td>{Feedback.email}</td>
                      <td>{Feedback.name}</td>
                      <td>{Feedback.subject}</td>
                      <td>{Feedback.message}</td>
                      <td className="flex gap-6">
                        <GrView
                          className="w-7 h-7 cursor-pointer text-blue-700 mt-3 hover:text-blue-500"
                          onClick={() => handleViewClick(Feedback)}
                        />
                        <TbMessage className="w-7 h-7 cursor-pointer text-yellow-700 mt-3 hover:text-yellow-500" />
                        <MdDelete
                          className="w-7 h-7 cursor-pointer text-red-700 mt-3 hover:text-red-500"
                          onClick={() => deleteFeedback(Feedback._id, Feedback.email)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 border ${currentPage === index + 1 ? 'bg-blue-500 rounded-full text-white' : 'bg-gray-200'}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
      {selectedFeedback && (
        <FeedbackModal feedback={selectedFeedback} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RePassengers;
