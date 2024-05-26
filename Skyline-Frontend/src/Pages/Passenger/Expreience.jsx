import React, { useState } from 'react';
import CoverVideo from '../../Components/Common/CoverVideo';

const Experience = () => {
  const [section, setSection] = useState('Economy');
  const [showDetails, setShowDetails] = useState(false);

  const handleSectionChange = (newSection) => {
    setSection(newSection);
    setShowDetails(false); // Reset details/photos display when changing sections
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Images for Economy Class and Business Class
  const economyImages = [
    './src/assets/Expreience/w.jpg',
    './src/assets/Expreience/w2.jpg',
    './src/assets/Expreience/w13.jpg',
    './src/assets/Expreience/w4.jpg',
    './src/assets/Expreience/w11.jpg',
    './src/assets/Expreience/w8.jpg',
    './src/assets/Expreience/w7.jpg',
    './src/assets/Expreience/w2.jpg',
    './src/assets/Expreience/w10.jpg',
    './src/assets/Expreience/w9.jpg',
    './src/assets/Expreience/w1.jpg',
    './src/assets/Expreience/w12.jpg'
  ];

  const businessImages = [
   
    './src/assets/Expreience/w11.jpg',
    './src/assets/Expreience/w8.jpg',
    './src/assets/Expreience/w7.jpg',
    './src/assets/Expreience/w2.jpg',
    './src/assets/Expreience/w10.jpg',
    './src/assets/Expreience/w9.jpg',
    './src/assets/Expreience/w1.jpg',
    './src/assets/Expreience/w12.jpg'
  ];

  // Render images based on the active section
  const renderImages = () => {
    const images = section === 'Economy' ? economyImages : businessImages;
    return images.map((image, index) => (
      <div key={index}>
        <img className="h-auto max-w-full rounded-lg" src={image} alt={`Image ${index + 1}`} />
      </div>
    ));
  };

  return (
    <>
       <div className='mt-[130px]'>
     <CoverVideo/>
   </div>








    <div className="text-3xl font-bold mt-40">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Buttons to switch between Economy and Business Class */}
        <div>
          <button className={section === 'Economy' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-700 px-4 py-2 rounded'} onClick={() => handleSectionChange('Economy')}>
            Economy Class
          </button>
        </div>
        <div>
          <button className={section === 'Business' ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-300 text-gray-700 px-4 py-2 rounded'} onClick={() => handleSectionChange('Business')}>
            Business Class
          </button>
        </div>
      </div>

      {/* Display images */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        {renderImages()}
      </div>

      {/* Button to toggle details/photos display */}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>

      {/* Display details/photos if toggled */}
      {showDetails && (
        <div className="mt-4">
          {/* Add details/photos here */}
        </div>
      )}
    </div>
    </>
  );
};

export default Experience;
