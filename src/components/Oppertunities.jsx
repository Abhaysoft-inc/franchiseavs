import React, { Component } from 'react'

export default class Oppertunities extends Component {
  render() {
    return (
    <>

    <div className='mt-10 h-96 mx-32'>
        <p className='text-center text-3xl font-[600]'>Latest Franchise Opportunities</p>



        <div className="grid grid-cols-5 gap-4 mt-8">
              {/* Example Card Component */}
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 1</h2>
                <p>Card content goes here</p>
              </div>
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 2</h2>
                <p>Card content goes here</p>
              </div>
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 3</h2>
                <p>Card content goes here</p>
              </div>
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 4</h2>
                <p>Card content goes here</p>
              </div>
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 5</h2>
                <p>Card content goes here</p>
              </div>
              <div className="col-span-1 bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold text-gray-800">Card 6</h2>
                <p>Card content goes here</p>
              </div>
              
            </div>
    </div>
    
    
    </>
    )
  }
}
