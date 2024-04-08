import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>

        <nav className="navbar bg-white shadow-lg">
          <ul className="py-[17px] flex">
            <li className="Brand ml-[112px]">
              <a href="/">
                <img src="/assets/images/cropped-Franchise-AVS-180-x-60-px-9.png" alt="" />
              </a>
            </li>

            <li className="relative group mt-5 ml-[352px] pr-10 z-20">
              <a href="/zudio-franchise" className="z-20">Categories</a>
              <ul className="absolute hidden bg-white text-gray-800 shadow-md rounded mt-2 group-hover:block">
                <li><a href="/zudio-franchise" className="block px-4 py-2 hover:bg-gray-200">Fashion</a></li>
                <li><a href="/zara-franchise" className="block px-4 py-2 hover:bg-gray-200">Retail</a></li>
                <li><a href="/chroma-franchise" className="block px-4 py-2 hover:bg-gray-200">Food and Bevrages</a></li>
                <li><a href="/jiomart-franchise" className="block px-4 py-2 hover:bg-gray-200">Beauty and Wellness</a></li>
              </ul>
            </li>

            <li className="relative group mt-5 ml-0">
              <a href="/zudio-franchise" className="">Commercial Properties</a>

            </li>

            <li className="relative group mt-5 ml-10">
              <a href="/zudio-franchise" className="">Services</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/zudio-franchise" className="">About</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/zudio-franchise" className="">Contact</a>

            </li>
            <li className="relative group mt-5 ml-10">
              <a href="/zudio-franchise" className="text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg></a>

            </li>








          </ul>


        </nav>




      </>
    )
  }
}
