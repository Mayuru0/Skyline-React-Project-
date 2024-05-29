import React from "react";

const TourCard = ({ photo, from, to,flight,departureDate,returnDate,tripType,passengers,economyPrice,businessPrice,description, }) => {
  return (
    <>




      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-[108%] transition duration-300 ease-out">
      <div className="relative">
        <img
          className="w-full"
          
          alt="Colombo to Male"
          src={photo}
        />
       
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{from} to {to} </div>
        <p className="text-gray-700 text-base">{departureDate} - {returnDate}</p>
        <div className="mt-4"><div>
          <span className="text-[15px] font-bold text-blue-500 flex justify-end">Economy Class ${economyPrice}</span> 
          </div>
          <div>
          <span className="text-[15px] font-bold text-blue-500 flex justify-end">Business Class ${businessPrice}</span>
          </div>
          <p className="text-gray-500 text-sm mt-1 flex justify-end">{tripType}</p>
          <p className="text-gray-500 text-sm flex justify-end">Flight - {flight}</p>
        </div>
        <div className="mt-4 ">
          <a  href="bookingform"  className=  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 w-full rounded "  >
            Book now
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default TourCard;
