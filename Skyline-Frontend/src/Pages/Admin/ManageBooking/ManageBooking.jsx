import React, { useState } from 'react';

const ManageBooking = () => {
  

  return (
    <div className="max-w-screen-2xl shadow-2xl rounded-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Add New Tour</h2>
      <form  className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tour Title</label>
          <input
            type="text"
            name="title"
           
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter Tour Title"
          />
        </div>
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Upload Photo</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <p className="mb-4 text-gray-500">Drop files here</p>
          <input type="file" id="file-upload" className="hidden" />
          <label htmlFor="file-upload" className="cursor-pointer bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600">
            Choose File
          </label>
          <p className="mt-2 text-gray-500">No file chosen</p>
        </div>
      </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Days</label>
            <input
              type="number"
              name="days"
            
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Days"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Nights</label>
            <input
              type="number"
              name="nights"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Nights"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Distance</label>
            <input
              type="text"
              name="distance"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Distance"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price $</label>
            <input
              type="number"
              name="price"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Price"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Max Group Size</label>
            <input
              type="number"
              name="groupSize"
             
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Max Group Size"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
          
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Description of the tour"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tour Mode</label>
            <select
              name="mode"
            
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="DayTour">DayTour</option>
              <option value="NightTour">NightTour</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Featured Or Not</label>
            <select
              name="featured"
            
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md hover:bg-green-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ManageBooking;
