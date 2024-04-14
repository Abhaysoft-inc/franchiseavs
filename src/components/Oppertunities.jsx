import React, { Component } from 'react'

export default class Oppertunities extends Component {
  render() {
    return (
    <>

    <div className='mt-10 mx-2 lg:mx-32 mb-10'>
        <p className='text-center text-xl lg:text-3xl font-[600]'>Latest Franchise Opportunities</p>



        <div className=" mx-2 lg:mx-0 lg:grid grid-cols-5 gap-4 mt-8">
              {/* Example Card Component */}


              <div className="col-span-1 bg-white border-black border-2 shadow-md p-1 h-64 mb-2 lg:mb-0">
                <img src="/assets/images/braevo-interactive-panel.png" alt="" />

                <p className="text-center text-gray-500 mt-1 text-xs">Category</p>
                <p className="text-center text-red-700 font-bold">Braevo Interactive Panel</p>
                


              </div>
              <div className="col-span-1 bg-white border-black border-2 shadow-md p-1 h-64 mb-2 lg:mb-0">
                <img src="/assets/images/braevo-interactive-panel.png" alt="" />

                <p className="text-center text-gray-500 mt-1 text-xs">Category</p>
                <p className="text-center text-red-700 font-bold">Braevo Interactive Panel</p>
                


              </div>
              <div className="col-span-1 bg-white border-black border-2 shadow-md p-1 h-64 mb-2 lg:mb-0">
                <img src="/assets/images/braevo-interactive-panel.png" alt="" />

                <p className="text-center text-gray-500 mt-1 text-xs">Category</p>
                <p className="text-center text-red-700 font-bold">Braevo Interactive Panel</p>
                


              </div>
              <div className="col-span-1 bg-white border-black border-2 shadow-md p-1 h-64 mb-2 lg:mb-0">
                <img src="/assets/images/braevo-interactive-panel.png" alt="" />

                <p className="text-center text-gray-500 mt-1 text-xs">Category</p>
                <p className="text-center text-red-700 font-bold">Braevo Interactive Panel</p>
                


              </div>
              <div className="col-span-1 bg-white border-black border-2 shadow-md p-1 h-64 mb-2 lg:mb-0">
                <img src="/assets/images/braevo-interactive-panel.png" alt="" />

                <p className="text-center text-gray-500 mt-1 text-xs">Category</p>
                <p className="text-center text-red-700 font-bold">Braevo Interactive Panel</p>
                


              </div>


              



              
              
            </div>

           <p className='text-center mt-6 mb-16 bg-red-700 p-2 text-white font-[600] border-white border rounded-lg hover:cursor-pointer'><a href="">LOAD MORE</a></p>


           <p className='text-center text-3xl font-[600] mb-10'>LATEST BRANDS</p>

           <div className="flex space-x-10 ">

            <img src="/assets/images/1.gif" className='w-1/2' alt="" />
            <img src="/assets/images/1.gif" className='w-1/2' alt="" />


           </div>
           <div className="flex space-x-10 mt-5">

            <img src="/assets/images/1.gif" className='w-1/2' alt="" />
            <img src="/assets/images/1.gif" className='w-1/2' alt="" />


           </div>

    </div>
    
    
    </>
    )
  }
}
