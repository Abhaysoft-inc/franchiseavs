import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ZudioPage from './screens/ZudioPage';
import PopupForm from './components/Popupform';

function App() {


  return (
    <>
      {/* Navbar */}


      <BrowserRouter>
    <Navbar/>
    <PopupForm/>

    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/zudio-franchise' element={<ZudioPage/>}/>

      
      
    </Routes>
    </BrowserRouter>

      



    </>
  )
}

export default App
