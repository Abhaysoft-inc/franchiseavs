import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ZudioPage from './screens/ZudioPage';
import PopupForm from './components/Popupform';
import LeadPopup from './components/LeadPopup';
import { useEffect } from 'react';
import React, { useState } from 'react';
import PreferredLocations from './screens/Testpage';
import BlogScreen from './screens/BlogScreen';
import EnamorPage from './screens/EnamorPage';

function App() {

  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false); // Track dismissal state

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const contentHeight = document.documentElement.scrollHeight;

      if (!dismissed && scrollPosition + windowHeight >= contentHeight / 2) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dismissed]); // Re-run only on dismissal state change

  const handleClosePopup = () => {
    setShowPopup(false);
    setDismissed(true); // Set dismissal flag
  };



  return (
    <>
      {/* Navbar */}


      <BrowserRouter>
    <Navbar/>
    
    
      {/* {showPopup && <LeadPopup onClose={handleClosePopup} />} */}
   
   

    <Routes>
      {/* <Route path='/' element={<PopupForm />} /> */}
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/zudio-franchise' element={<ZudioPage/>}/>
      <Route path='/test' element={<PreferredLocations />}/>
      <Route path='/blog' element={<BlogScreen/>}/>
      <Route path='/enamor-franchise-cost-details-and-reviews' element={<EnamorPage/>}/>
      

      
      
    </Routes>
    </BrowserRouter>

      



    </>
  )
}

export default App
