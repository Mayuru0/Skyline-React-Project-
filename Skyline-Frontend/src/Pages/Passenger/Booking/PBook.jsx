import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";
import TableBokk from "./TableBokk";


const PBook = () => {
  const [bookingData, setBookingData] = useState({});

  const handleChange = (e) => {
    const newBookingData = { ...bookingData };
    newBookingData[e.target.name] = e.target.value;
    setBookingData(newBookingData);
  };

  const handleBook = (e) => {
    e.preventDefault();
    console.log(bookingData);
  };


  return (

    <div className='bg-[url(../src/assets/bg/4k.jpg)] bg-cover bg-no-repeat'>
    <section className='h-screen'>
        <div className=''>
          

       
    <div className="mt-[10px] mb-[1000px] shadow-xl ">
    
      <div className="mt-13">

      <section className="section__container booking__container bg-white mt-[129px]    ">
        <div className="booking__nav">
          <span required onChange={(e) => handleChange(e)}className="text-base text-white hover:text-blue-50 hover:bg-blue-700 py-1 md:h-full">Economy Class</span>
          <span requiredonChange={(e) => handleChange(e)} className="text-base text-white hover:text-blue-50 hover:bg-blue-700 py-1">Business Class</span>
          {/*<span className='text-base text-white first:text-blue-600 hover:text-blue-50 hover:bg-blue-700 py-1'>First Class</span>*/}
        </div>

        <form className="form" >

         {/*Destination From */ }
        <div className="form__group mt-8 ">
  <span><HiOutlineLocationMarker /></span>
  <div className="input__content">
    <div className="input__group">
      <select
        name="to"
        id="to"
        className="w-full border-b border-blue-800 outline-none mt-4"
        required onChange={(e) => handleChange(e)}
      >
        <option value="">Select Origin</option>
        <option>Srilanka</option>
        <option>Dubai</option>
        <option>India</option>
        <option>New Zealand</option>
      </select>
      <label className="absolute top-0 left-0 transition-all duration-300 text-dark -mt-7" htmlFor="location">
        From
      </label>
    </div>
    <p> Origin</p>
  </div>
</div>

{/*Destination To */ }
<div className="form__group mt-8  ">
  <span><HiOutlineLocationMarker /></span>
  <div className="input__content">
    <div className="input__group">
      <select
        name="to"
        id="to"
        className="w-full border-b  border-blue-800 outline-none mt-4"
        required onChange={(e) => handleChange(e)}
      >
        <option value="">Select Destination</option>
        <option>Srilanka</option>
        <option>Dubai</option>
        <option>India</option>
        <option>New Zealand</option>
      </select>
      <label className="absolute top-0 left-0 transition-all duration-300 text-dark -mt-7" htmlFor="location">
        To
      </label>
    </div>
    <p>Destination</p>
  </div>
</div>
                   
           {/*passengers*/}
          <div className="form__group">
            <span><RiAccountPinCircleLine /></span>
            <div className="input__content">
              <div className="input__group">
                <input type="number"  required onChange={(e) => handleChange(e)} className="w-full border-b border-primary-color outline-none mt-4" />
                <label className="absolute top-0 left-0 transition-all duration-300 text-dark -mt-4" htmlFor="travellers">Travellers</label>
              </div>
              <p>Add guests</p>
            </div>
          </div>



           {/*Date*/}
           <div className="form__group">
  <span><RxCalendar /></span>
  <div className="input__content">
    <div className="input__group">
      <input type="date" required onChange={(e) => handleChange(e)} className="w-full border-b border-primary-color outline-none mt-4" />
      <label className="absolute top-0 left-0 transition-all duration-300 text-dark -mt-4" htmlFor="departure">Departure</label>
    </div>
    <p className="ml-auto">Select dates</p>
  </div>
</div>


           {/*Date*/}
          <div className="form__group">
            <span><RxCalendar /></span>
            <div className="input__content">
              <div className="input__group">
                <input type="date" required onChange={(e) => handleChange(e)} className="w-full border-b border-primary-color outline-none mt-4" />
                <label className="absolute top-0 left-0 transition-all duration-300 text-dark -mt-4" htmlFor="return">Return</label>
              </div>
              <p>Select dates</p>
            </div>
          </div>


          <button className="btn    text-white  space-x-2 text-center flex items-center justify-center" onClick={(e) => handleBook(e)}>
         <TbSearch className="mr-1" /> search 
             <i className="ri-search-line"></i>
         </button>

        </form>
      </section>

    </div>


   <TableBokk />
    
    
    </div>

    

    </div>
    
    </section>

  
</div>

    
    
  );
};

export default PBook;
