import React, { useContext, useState } from 'react'
import './Navbar.css'
import {StoreContext} from '../../context/Context'
import SignIn from '../SignIn/SignIn';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const color=currentRoute==='/'?'white':'#49557e';
  const bgColor=currentRoute==='/'?'transparent':'white'
  const {getTotalCartAmt} = useContext(StoreContext)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const[menu,setMenu]= useState('menu')
  return (
    <>
    <div className='navbar sticky-top px-3 py-2 p-md-3 d-flex justify-content-between align-items-center w-100' style={{backgroundColor:bgColor}}>
      <Link to='/' className='h4'><span className='logo'>Yummy</span><span className='span' style={{color:color}}>Bento</span></Link>
      <ul className='navbar-menu d-none d-sm-flex align-items-end list-unstyled gap-3 gap-md-4 fs-6 cursor-pointer'style={{color:color}}>
        <a href='#app' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</a>
       
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu'?'active':''}>menu</a>
        <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu==='mobile-app'?'active':''}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu==='contact-us'?'active':''}>Contact Us</a>
      </ul>
      <div className="navbar-right d-flex align-items-center jutify-content-between gap-3 gap-md-4">
      <i className='bx bx-search-alt search' style={{transform:"scale(1.5)",color:color}} ></i>
        <div className="navbar-search-icon position-relative ">
         <Link to='/cart'> <i className='bx bx-basket basket'style={{transform:"scale(1.5)",color:color}} ></i></Link>
          {getTotalCartAmt()>0&& <div className="dot"> </div>}
        </div>
        <SignIn  />
      </div>
    </div>
    </>
  )
}
export default Navbar