import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";


const Search = () => {
  return (
    <div className='mt-12'>

<section class="section__container booking__container">
      <div class="booking__nav">

        <span className='text-base text-white md:dark:hover:text-blue-50  dark:hover:text-blue-700 md:dark:hover:bg-[#3D5CB8] dark:border-gray-700  py-1md:h-full   '> Economy Class</span>
        <span className='text-base text-white first:text-blue-600 md:dark:hover:text-blue-50  dark:hover:text-blue-700 md:dark:hover:bg-[#3D5CB8] dark:border-gray-700  py-1'>Business Class</span>
        {/*<span className='text-base text-white first:text-blue-600 md:dark:hover:text-blue-50  dark:hover:text-blue-700 md:dark:hover:bg-[#3D5CB8] dark:border-gray-700  py-1'>First Class</span> */}
      </div>




      <form className='form1'>
        <div class="form__group" >
          <span><i class="ri-map-pin-line"></i></span>
         
          <div class="input__content"> 
            
            <div class="input__group">
              <input type="text" />
              <label> <HiOutlineLocationMarker className='icon' />Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>  <RiAccountPinCircleLine  className='icon' />Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" /> {/*}
              <input type="date" name="date" required className='outline-none p-2 w-full'/>*/}
              <label>  <RxCalendar  className='icon' />Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>  <RxCalendar  className='icon' />Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="btn"><TbSearch /><i class="ri-search-line"></i></button>
      </form>
    </section>

    

    </div>
  )
}

export default Search