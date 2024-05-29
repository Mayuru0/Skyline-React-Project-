import React, { useState, useContext, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { AuthContext} from"../../context/AuthContext";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
const UserProfile = ( ) => {
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
   
     <div  >
    
     <div className='flex items-center justify-end -mr-5 '> 
         
         <button
           type="button"
           className="flex text-sm bg-blue-100 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
           id="user-menu-button"
           aria-expanded={isDropdownOpen ? "true" : "false"}
           aria-controls="user-dropdown"
           onClick={toggleDropdown}
         >
           <span className="sr-only">Open user menu</span>
 
           
           <img
             //className="w-14 h-14 rounded-full"
            // src="../src/assets/logo/userpro.webp"
           //  alt="user photo"
           />
           <div  ><FaUser className="w-14 h-14 rounded-full text-blue-950" /></div>
           
         </button>
 
         {isDropdownOpen && (
           <div
             className="absolute right-0 z-50 mt-[230px] mr-[320px] text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-blue-950 dark:divide-gray-60 "
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
                   href="userProfile"
                   className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex  items-center"
                 >
                  <FaRegUser className="mr-2 "/> 
                   Profile
                 </a>
               </li>
               <li>
                 <a
                   href="#"
                   className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex  items-center"
                 >
                  <FaRegCalendarAlt className="mr-2"/>
                   My Booking
                 </a>
               </li>
           
               <li>
                 <a
                  onClick={handleLogout}
                   className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer flex  items-center"
                 >
                  <FaSignOutAlt className="mr-2"/>
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

export default UserProfile;
