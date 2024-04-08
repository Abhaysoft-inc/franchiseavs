// PopupForm.js
import React, { useState, useEffect } from 'react';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Set showPopup to true when the component mounts
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-950 bg-opacity-50 z-10">
        <div className="bg-white rounded shadow-md h-[577px] w-[700px] flex">

            <div className="leftbox bg-blue-800 w-1/2">

            </div>
            <div className="rightbox w-1/2">

            <button
              type="button"
              onClick={handleClosePopup}
              className="px-4 py-2 bg-gray-800 text-white rounded mt-4"
            >
              Dismiss
            </button>

            </div>




          
            
            
          
        </div>
      </div>
    )
  );
};

export default PopupForm;
