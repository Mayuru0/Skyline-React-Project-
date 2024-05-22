// src/Slider.js
import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import business from'./SliderImg/extra_legroom_seat.jpg';
import  bagg from './SliderImg/prepaid_excess_baggage.jpg';
import duty from'./SliderImg/duty_free.jpg';
import seat from'./SliderImg/advance_seat_reservation.jpg';


const services = [
  {
    title: "Bid For Business Class",
    description: "Bid for your Business Class upgrade online",
    image:business ,
  },
  {
    title: "Pre-Order Your Duty-Free",
    description: "You can easily pre-order your favorite duty-free item",
    image: duty,
  },
  {
    title: "Prepaid Excess Baggage",
    description: "Pre-purchase extra baggage at a discounted rate",
    image: bagg,
  },
  {
    title: "Advance Seat Reservation",
    description: "Window or Aisle seat? Reserve your seat in advance",
    image:seat,
  },
  
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === services.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="p-4">
                <img src={service.image} alt={service.title} className="w-72 h-72 object-cover rounded" />
                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Find out more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow-lg">
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow-lg">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
