
import React from 'react';

const BookingCard = ({ image, title, price, rating }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 text-base">${price} /per person</p>
        <p className="text-green-500">{rating ? `${rating} ⭐` : 'Not rated'}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookingCard;
