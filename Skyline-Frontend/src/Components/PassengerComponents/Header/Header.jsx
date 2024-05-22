import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import UserProfile from"../UserProfile/UserProfile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };




{/*
 // State to manage the visibility of the dropdown
 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 // Function to toggle the dropdown
 const toggleDropdown = () => {
   setIsDropdownOpen(!isDropdownOpen);
 };
*/}

const [noBg,addBg]= useState('nvh')
const addBgcolor =() => {


  if(window.scrollY >= 10){
  addBg('nvh navbar_with_Bg')
}else{
    addBg('nvh')
}
}



window.addEventListener('scroll',addBgcolor)

  const navItems = [
    { path: "/Passenger", title: "Home" },
    { path: "/Passenger/Pbook", title: "Book" },
    { path: "/Passenger/Pflightlist", title: "FlightList" },
    { path: "/Passenger/Pexpreience", title: "Experience" },
    { path: "/Passenger/Phelp", title: "Help" },
    { path: "/Passenger/Pabout", title: "About" },
  ];

  return (
     <div >
    <div  class="bg-white dark:bg-blue-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border"  >
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4   ">
      <nav className="flex justify-between items-center py-6  ">
        <a href="/" className="skyline">
          <img src="../src/assets/logo/new logo.png" alt="logo" class="w-20 h-20 mx-auto" />
        </a>

        {/* Nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
            >
              <NavLink to={path} activeClassName="active">
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Signup and login */}
             <UserProfile/>

        {/*   mobile menu        */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler} >
         {
           isMenuOpen ?  < FaXmark CgMenuGridO className="w-6 h-6 text-black" /> : <CgMenuGridO className="w-6 h-6 text-black" />
         }
          </button>


        </div>
      </nav>
      {/*  naviitem for mobile*/}

      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
  <ul>
    {navItems.map(({ path, title }) => (
      <li key={path} className="text-base text-white first:text-blue-600 md:dark:hover:text-blue-50  dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 font-bold py-1">
        <NavLink to={path} activeClassName="active">
          {title}
        </NavLink>
      </li>
    ))}
{/*
    <li className="text-base text-white first:text-blue-600 md:dark:hover:text-blue-50  dark:hover:text-blue-700 md:dark:hover:bg-transparent dark:border-gray-700 font-bold py-1">

    <NavLink to="/login" >
            Log in
          </NavLink>
    </li> */}
  </ul>
</div>


    </header>

{/* Dropdown content */}

{/*
     
    <div className="">
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={isDropdownOpen ? "true" : "false"} aria-controls="user-dropdown" onClick={toggleDropdown}>
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="./src/assets/logo/client-1.jpg" alt="user photo" />
            </button>
            
            {isDropdownOpen && (
              <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
            )}

            </div>

          */}
    </div>
    </div>
  );
};

export default Header;
