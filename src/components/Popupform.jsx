import React, { useState, useEffect, useRef } from 'react';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Set showPopup to true when the component mounts
    setShowPopup(true);

    // Add event listener to handle clicks outside the form
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      // Click occurred outside of form, close the popup
      setShowPopup(false);
    }
  };

  return (
    showPopup && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-950 bg-opacity-50 z-10">
        <div ref={formRef} className="bg-white rounded shadow-md h-[577px] w-[700px] flex">
          <div className="leftbox bg-blue-800 w-1/2">
            <img src="/assets/images/cropped-Franchise-AVS-180-x-60-px-9.png" alt="" className='px-20 py-10' />
            <p className='text-center text-[25px] text-white font-[600]'>Expert Advise For Free!</p>
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
