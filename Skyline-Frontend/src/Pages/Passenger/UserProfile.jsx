import React from 'react'

const UserProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
      <div className="text-right mb-4">
        <a href="/profile" className="text-orange-500">View profile</a>
      </div>
      <h2 className="text-2xl font-semibold mb-6">Account</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 11c2.21 0 4-1.79 4-4S14.21 3 12 3 8 4.79 8 7s1.79 4 4 4zM12 13c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
            ></path>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Profile</h3>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-gray-600 mb-2">
          <span className="font-bold">USERNAME: </span>
          104916259495851961230
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-bold">FIRST NAME: </span>
          Mayuru
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-bold">LAST NAME: </span>
          Madhuranga
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-bold">EMAIL ADDRESS: </span>
          madurangamayuru@gmail.com
        </div>
        <div className="text-gray-600">
          <span className="font-bold">COUNTRY: </span>
          LK Sri Lanka
        </div>
      </div>
      <div className="text-right">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Edit</button>
      </div>
    </div>
  </div>
  )
}

export default UserProfile