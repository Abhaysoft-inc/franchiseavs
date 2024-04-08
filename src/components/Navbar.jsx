import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>

      <nav className="navbar bg-white shadow-lg">
        <ul className='py-[17px] flex'>
        <li className='Brand ml-[82px]'><a href="/"><img src="/assets/images/cropped-Franchise-AVS-180-x-60-px-9.png" alt="" /></a></li>


            <li className='mt-5 ml-72'><a href="/zudio-franchise" className=''>ZUDIO Franchise</a></li>
            <li className='mt-5 ml-10'><a href="/zudio-franchise" className=''>ZARA Franchise</a></li>
            <li className='mt-5 ml-10'><a href="/zudio-franchise" className=''>CHROMA Franchise</a></li>
            <li className='mt-5 ml-10'><a href="/zudio-franchise" className=''>JIOMART Franchise</a></li>
            
        </ul>
      </nav>
      
      
      
      </>
    )
  }
}
