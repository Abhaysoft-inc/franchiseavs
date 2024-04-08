import React, { Component } from 'react';

export default class SearchFranchise extends Component {
  render() {
    return (
      <>
        <div className="searchsection h-[412px] w-full">
          <div className='z-10 container2'>
            <p className='text-white text-center text-[29px] pt-16'>Find Franchise Opportunities Here!</p>

            <div className="flex justify-center mt-8 mx-96  p-4 w-auto">
              
              <div>
                
                <input type="text" id="location" className="bg-white text-gray-900 rounded-md w-96 px-8 py-4" placeholder="Search your desired franchise" />
              </div>
              <div className="ml-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-16 rounded">
                  Search
                </button>
              </div>
            </div>

            <p className=' mt-6 text-center text-white font-[600] text-2xl'>Are You Looking For Brand Franchise in India?</p>

            <p className=' mt-6 text-center text-pink-600 font-[600] text-3xl'>Welcome To Bharat Franchise</p>
          </div>
        </div>
      </>
    );
  }
}
