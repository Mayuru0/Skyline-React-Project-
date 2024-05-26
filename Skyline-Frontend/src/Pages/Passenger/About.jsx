import React from 'react'
import CoverVideo from '../../Components/Common/CoverVideo'

const About = () => {
  return (
    <>
    <div className='mt-[130px]'>
     <CoverVideo/>
   </div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to Skyline , your number one source for all things travel. We're dedicated to giving you the very best flight booking experience, with a focus on reliability, customer service, and uniqueness.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Founded in 2023 by a group of passionate travel enthusiasts, Skyline  has come a long way from its beginnings. When we first started out, our passion for making travel accessible to everyone drove us to start our own business.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <p className="text-lg text-gray-700">
        Sincerely,<br/>
        The  Skyline Team
      </p>
    </div>

    
  </div>
  </>
  )
}

export default About