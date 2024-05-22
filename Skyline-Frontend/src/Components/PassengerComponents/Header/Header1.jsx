
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";


const Header1 = () => {

  
    const[isMenuOpen,setIsMenuOpen] =useState(false);
     const handleMenuToggler = () => {
         setIsMenuOpen(!isMenuOpen)
     }
  
  return (
    <div >
        

    
    
       
     
        <nav class="bg-white dark:bg-blue-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a  class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./src/assets/new logo.png" className='skyline' alt="Skyline" />
         
      </a>
    
      
      
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p- md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:bg-blue-200 dark:border-gray-700">
          <li>
            <a href="home" class="block py-2 px-3  text-white dark:bg-blue-200 rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:text-blue-500 font-bold  " aria-current="page" >Home</a>
          </li>
          <li>
            <a href="book" class="block py-2 px-3  dark:bg-blue-200blue-100 rounded hover:bg-gray-00 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold ">Book</a>
          </li>
          <li>
            <a href="flightlist" class="block py-2 px-3 dark:bg-blue-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold ">Flight List</a>
          </li>
          <li>
            <a href="expreience" class="block py-2 px-3 dark:bg-blue-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">Expreience</a>
          </li>
          <li>
            <a href="help" class="block py-2 px-3 dark:bg-blue-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">Help</a>
          </li>
          <li>
            <a href="about" class="block py-2 px-3 dark:bg-blue-200 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">About</a>
          </li>
         
    
    
        </ul>
      </div>
    
    
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse  ">
    
    
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-400 dark:hover:bg-red-00 dark:focus:ring-white-400 " ><a href="userprofile" class="block w-full h-full">  My Account </a></button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false" >
           
        </button>
    
          <div className='px-1 py-1'>
            
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-400  dark:hover:bg-red-00 dark:focus:ring-white-400" a href="login"> <a href="login" class="block w-full h-full"><a href="userprofile" class="block w-full h-full"/> <CgProfile className='logo'  /></a></button>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
         
          
        </button>
        </div>
        
    
        
    
    
    
    
    
    
      </div>
      </div>
    </nav>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        </div>
  )
}

export default Header1