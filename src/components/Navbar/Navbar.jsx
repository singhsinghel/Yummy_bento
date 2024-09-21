import React, { useState } from 'react'
import './Navbar.css'
import {Link} from'react-router-dom'
import {assets} from '../../assets/frontend_assets/assets'
const Navbar = () => {

  const[menu,setMenu]= useState('menu')
  return (
    <div className='navbar sticky-top p-4  d-flex justify-content-around align-items-center w-100'>
      <h2 className='h2 logo text-info'>YummyBento</h2>
      <ul className='navbar-menu  d-flex list-unstyled gap-3 gap-md-4 fs-4 cursor-pointer'style={{color:'#49557e'}}>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#platform' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
      </ul>
      <div className="navbar-right d-flex align-items-center jutify-content-between  gap-4">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon position-relative ">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> </div>
        </div>
          <button className='btn px-4 rounded-5 navbar-right-button'style={{color:'#49557e'},{border:'1px solid black'}}>signin</button>
      </div>
      
    </div>
  )
}
export default Navbar
