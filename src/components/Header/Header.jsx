import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header mt-2 mt-md-5 rounded-4'>
      <div className="header-contents d-flex flex-column align-items-start gap-4">
        <h2 className='fw-bold text-light'>Order your favourite food here</h2>
        <p className='text-white d-md-inline d-none  fs-6'> Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.our mission is to satisfy your cravings and elevate your dininig experience, one delicious meal at a time. </p>
        <button className='btn btn-light px-3 fw-bold rounded-5' style={{color:'#747474'}}> View menu</button>
      </div>
    </div>
  )
}
export default Header
