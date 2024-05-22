import React from 'react';

const PHelp = () => {
  return (
    <div className="text-3xl font-bold mt-40">
      Help
      <video autoPlay muted loop className="w-full">
        <source src="../src/assets/bg/se.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PHelp;
