import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import Button from '@mui/material/Button';
import SignIn from '../SignIn/SignIn';
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const[menu,setMenu]= useState('menu')
  return (
    <>
    <div className='navbar sticky-top px-3 py-2 p-md-3 d-flex justify-content-between align-items-center w-100'>
      <h2 className='h4'><span className='logo'>Yummy</span><span className='text-secondary'>Bento</span></h2>
      <ul className='navbar-menu d-none d-sm-flex align-items-end list-unstyled gap-3 gap-md-4 fs-6 cursor-pointer'style={{color:'#49557e'}}>
        <a href='#app' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</a>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
      </ul>
      <div className="navbar-right d-flex align-items-center jutify-content-between gap-3 gap-md-4">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon position-relative ">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> </div>
        </div>
        <SignIn  />
      </div>
    </div>
    </>
  )
}
export default Navbar