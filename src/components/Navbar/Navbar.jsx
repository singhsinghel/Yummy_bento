import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
const Navbar = () => {

  const[menu,setMenu]= useState('menu')
  return (
    <div className='navbar sticky-top px-0 py-3 p-md-4 d-flex justify-content-between align-items-center w-100'>
      <h2 className='h2 logo text-info'>YummyBento</h2>
      <ul className='navbar-menu d-none d-sm-flex list-unstyled gap-3 gap-md-4 fs-4 cursor-pointer'style={{color:'#49557e'}}>
        <li onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</li>
        <li onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</li>
        <li onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</li>
      </ul>
      <div className="navbar-right d-flex align-items-center jutify-content-between  gap-3 gap-md-4">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon position-relative ">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> </div>
        </div>
          <button className='btn btn-sm px-4 rounded-5 navbar-right-button'style={{color:'#49557e'},{border:'1px solid black'}}>signin</button>
      </div>

    </div>
  )
}
export default Navbar
