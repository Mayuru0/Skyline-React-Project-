import React, { useState, useContext, useEffect } from "react";
import { FaEnvelope, FaRegBell } from 'react-icons/fa';
import { AuthContext} from"../../context/AuthContext";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";
const AdminHeader = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { passenger, dispatch } = useContext(AuthContext);
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.href = "/home";
  };
  
  
  useEffect(() => {
    // Check if the toast message has been displayed
    const toastDisplayed = localStorage.getItem("toastDisplayed");
  
    if (passenger && !toastDisplayed) {
      // Display welcome message when user logs in
      toast.success(`Welcome ${passenger.firstName}`);
      // Set flag to indicate that the toast message has been displayed
      localStorage.setItem("toastDisplayed", true);
    }
  }, [passenger]);
 

  return (
    <div className=" bg-slate-100 py-3 h-[70px] shadow-lg px-[24px]  "> 
        <div>
          
        
          <img src="../src/assets/logo/new logo.png" alt="logo" class="w-14 h-14  " />
         
        
       
        </div>
        
      <div className="flex items-center justify-end mr-4 -mt-14"> 
      <div className='flex '>
         <p className='text-[25px] font-bold font-sans text-blue-700 hover:text-blue-500 mr-[1155px] cursor-pointer'>Skyline</p>
        </div>
    
      <FaRegBell className='mr-4'/>
      <FaEnvelope className='mr-6'/>
      <span className="text-blue-700 hover:to-blue-500 cursor-pointer font-semibold mr-2 ">Welcome, {passenger.firstName}</span>
        <button
          type="button"
          className="flex text-sm bg-blue-100 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          aria-controls="user-dropdown"
          onClick={toggleDropdown}
        >
        
          <span className="sr-only">Open user menu</span>
        
          <div >
            <FaUser className="w-14 h-14 rounded-full text-blue-950" /></div>
        </button>

        {isDropdownOpen && (
          <div
            className="absolute right-0 z-50 mt-[230px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-blue-950 dark:divide-gray-60 "
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
              {passenger.firstName}
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              {passenger.email}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/admin/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
             {/*} <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
        </li>*/}
              <li>
              <a
                  onClick={handleLogout}
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                 >
                   Sign out
                 </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
