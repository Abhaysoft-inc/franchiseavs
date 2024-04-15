import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>

        <nav className="navbar hidden bg-white shadow-lg lg:block">
          <ul className="py-[17px] flex">
            <li className="Brand ml-[112px]">
              <a href="/">
                <img src="/assets/images/harat.png" className='w-auto h-16' alt="" />
              </a>
            </li>

            <li className="relative group mt-5 ml-[352px] pr-10 z-20">
              <a href="/blog" className="z-20">Blogs</a>
              <ul className="absolute hidden bg-white text-gray-800 shadow-md rounded mt-2 group-hover:block">
                <li><a href="/fashion" className="block px-4 py-2 hover:bg-gray-200">Fashion</a></li>
                <li><a href="/retail" className="block px-4 py-2 hover:bg-gray-200">Retail</a></li>
                <li><a href="/food-and-bevrages" className="block px-4 py-2 hover:bg-gray-200">Food and Bevrages</a></li>
                <li><a href="/beauty-and-wellness" className="block px-4 py-2 hover:bg-gray-200">Beauty and Wellness</a></li>
              </ul>
            </li>

            <li className="relative group mt-5 ml-0">
              <a href="/commercial-properties" className="">Commercial Properties</a>

            </li>

            <li className="relative group mt-5 ml-10">
              <a href="/services" className="">Services</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/about" className="">About</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/contact" className="">Contact</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/search-franchise" className="text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg></a>

            </li>








          </ul>


        </nav>



        <nav className="navbar bg-white shadow-lg lg:hidden">
          <ul className="py-[17px] flex justify-between">
            <li className="Brand ml-2">
              <a href="/">
                <img src="/assets/images/harat.png" className='w-auto h-16' alt="" />
              </a>
            </li>

            
            <li className="relative group mt-5 mr-10">
              <a href="/search-franchise" className="text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg></a>

            </li>








          </ul>


        </nav>




      </>
    )
  }
}
