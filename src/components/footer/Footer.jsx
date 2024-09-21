import React from 'react'
import './footer.css';
import { assets } from '../../assets/frontend_assets/assets';
const Footer = () => {
  return (
    <div className='footer d-flex flex-column p-5 w-100 bg-dark text-light  justify-content-evenly ' id='footer' style={{minHeight:'18rem'}}>
        <div className="footer-content text-light row">
            <div className="footer-content-left col-12 col-md-6">
                <h2 className='fw-bold fs-1' style={{color:'tomato'}}>YummyBento.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae a incidunt doloribus, exercitationem sit praesentium pariatur quis soluta hic distinctio autem iure obcaecati amet ipsum aliquid, consectetur commodi adipisci blanditiis!</p>

            </div>
            <div className="footer-content-center col-12 col-md-3">
                <h3 className=''>Company</h3>
                <ul className='fw-light list-unstyled'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right col-12 col-md-3">
                <h3>GET IN TOUCH</h3>
                <ul className='fw-light list-unstyled'>
                    <li>+91-8112450779</li>
                    <li>singhelboyankit@gmail.com</li>
                    
                </ul>
            </div>
        </div>

        <hr className='text-light-emphasis' />
        <div className="copyright text-center text-light-emphasis ">
           <p>Copyright 2024 © YummyBento.com- All Right Reserved </p>
        </div>
       
    </div>
  )
}

export default Footer
