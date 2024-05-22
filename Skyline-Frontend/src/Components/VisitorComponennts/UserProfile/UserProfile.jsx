import React, { useState } from 'react'; // Import useState from React
import { FaUser } from "react-icons/fa";


const AdminHeader = ( ) => {
  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex items-center justify-end -mr-44 '> 
        
        <button
          type="button"
          className="flex text-sm bg-blue-950 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded={isDropdownOpen ? "true" : "false"}
          aria-controls="user-dropdown"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open user menu</span>

          
          {/* Replace the image source with your actual user photo */}
          <img
            className="w-14 h-14 rounded-full"
            src="../src/assets/logo/2.jpg"
            alt="user photo"
          />
        </button>

        {isDropdownOpen && (
          <div
            className="absolute right-0 z-50 mt-[230px] mr-[130px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-blue-950 dark:divide-gray-60 "
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Mayuru
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                Mayuru@gmail.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/Passenger/UserProfile"
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
                  href="/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    
  );
};

export default AdminHeader;
