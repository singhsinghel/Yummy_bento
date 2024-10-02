import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Place-order/PlaceOrder'
import Footer from './components/footer/Footer'
import './App.css'
import SignIn from './components/SignIn/SignIn'
import Scroll from './components/scrollToTop/Scroll'
import Alert from './components/alerts/Alert'
const App = () => {
  const [inUp, setInUp] = useState('');

  
  return ( 
    <>
    <div className='app d-flex flex-column justify-content-center  m-auto'>
      <Navbar setInUp={setInUp} />
      <Alert />
      <Scroll />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer  />
    <SignIn setInUp={setInUp} inUp={inUp} />
    </>
    
  )
}

export default App
