import React from 'react';

const LeadPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg p-4 h-96 w-64 shadow-md">
        <p>Enquiry Form!</p>
        <button className="mt-2 text-sm font-medium text-red-600 hover:underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LeadPopup;
