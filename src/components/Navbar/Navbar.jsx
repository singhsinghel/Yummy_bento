import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { StoreContext } from '../../context/Context';
import Button from '@mui/material/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { toast } from 'react-toastify';

const Navbar = ({setInUp}) => {
  const isMediumOrLarger = window.matchMedia("(min-width: 768px)").matches;
  
  const location = useLocation();
  const currentRoute = location.pathname;

  const position = (currentRoute === '/' && isMediumOrLarger) ? '' : 'sticky-top';
  const color = (currentRoute === '/' && isMediumOrLarger) ? 'white' : '#49557e';
  const bgColor = currentRoute==='/' ? 'transparent' : 'white';
  const { getTotalCartAmt,token,setToken,handleOpen } = useContext(StoreContext);
  const [menu, setMenu] = useState('menu');
  const navigate= useNavigate();
  

  const logout=()=>{
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
    toast.success('logged out successfully');
  }
 
  useEffect(() => {
    if (currentRoute==='/'&& isMediumOrLarger) { // Only runs the animations on the home page
      const tl = gsap.timeline();

      tl.from('.cover-img', {
        opacity: 0,
        y: -500,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })
      .from('.title', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      })
      .from('.navbar-menu', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.5') // Overlap with the previous animation by 0.5 seconds
      .from('.navbar-right', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.5')
      .from('.inp-btn', {
        opacity: 0,
        y:40,
        duration: 1,
        ease: 'power4.out',
      })
    }
  }, [currentRoute==='/']);

  return (
    <div className={`navbar px-3 py-2 p-md-3 d-flex justify-content-between align-items-center w-100 ${position}`} style={{ backgroundColor: bgColor}}>
      <Link to='/' className='h4 title'>
        <span className='logo'>Yummy</span>
        <span className={`text-${position==='sticky-top'?'secondary':'light'}`}>Bento</span>
        <span className='fw-bold fs-4 logo'>.</span>
      </Link>
   
      <ul className='navbar-menu d-none d-sm-flex align-items-end list-unstyled gap-3 gap-md-4 fs-6 cursor-pointer' style={{ color }}>
        <a href='#app' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</a>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className="navbar-right d-flex align-items-center justify-content-between gap-3">
        <i className='bx d-none d-sm-inline bx-search-alt' style={{ transform: "scale(1.5)", color }}></i>
        <div className="navbar-search-icon position-relative">
          <Link to='/cart'>
            <i className='bx bx-basket' style={{ transform: "scale(1.5)", color }}></i>
          </Link>
          {getTotalCartAmt() > 0 && <div className="dot"></div>}
        </div>
        {token
        ?    <div className=" dropdown">
            <a className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <PersonOutlineRoundedIcon />
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Orders</a></li>
          <li><a onClick={logout} className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
        : <Button
          className='btn btn-sm rounded-5 navbar-right-button'
          style={{ color: color, border: '1px solid black' }}
         onClick={()=>{handleOpen();setInUp('signIn')}}
         >
          SignIn
         </Button>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
