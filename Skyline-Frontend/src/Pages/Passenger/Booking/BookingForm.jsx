import React from 'react';

const BookingForm = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Book your flight</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">From</label>
                    <input
                        type="text"
                        value="Colombo - Sri Lanka (CMB)"
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">To</label>
                    <input
                        type="text"
                        value="Melbourne - Australia (MEL)"
                        readOnly
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Departure</label>
                    <input
                        type="date"
                        value="2024-06-05"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Return</label>
                    <input
                        type="date"
                        value="2024-06-19"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label className="block text-gray-700">Round-trip</label>
                    <select className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Round-trip</option>
                        <option>One-way</option>
                    </select>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <label className="block text-gray-700">1 Passenger, Economy</label>
                    <select className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>1 Passenger, Economy</option>
                        <option>2 Passengers, Economy</option>
                        <option>1 Passenger, Business</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default BookingForm;
