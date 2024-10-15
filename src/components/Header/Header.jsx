import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import {toast} from 'react-toastify'
import axios from 'axios'
import { StoreContext } from '../../context/Context'
const Header = () => {
  const {url,setFoodList,fetchList}=useContext(StoreContext)
  const [query,setQuery]= useState('');

  const searchItems=async(e)=>{
    e.preventDefault()
     if(!query){
      await fetchList();
      return toast.success("Showing all foods")
     }
    let response= await axios.post(url+'/api/food/search',{query:query});
    if(response.data.success){
      toast.success(`Showing ${query}`);
      setFoodList(response.data.data);

    }
  }
  return (
    <div className='header mt-2 mt-md-5 rounded-4'>
      <div className="header-contents d-flex flex-column align-items-start gap-4">
        <h2 className='fw-bold text-light'>Order your favourite food here</h2>
        <p className='text-white d-lg-inline d-none fs-6'> Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.our mission is to satisfy your cravings and elevate your dininig experience, one delicious meal at a time. </p>
        <div className="action d-flex ">
        <form action="">
          <div className="inp-btn row w-100 bg-light rounded-4">
          <button className='btn col-lg-2 col-3  menu-btn btn-light px-3 fw-bold rounded-start-4 rounded-end-0' style={{color:'#747474'}}> View menu</button>
            <input value={query} onChange={(e)=>{setQuery(e.target.value)}} type="text" placeholder='Search Dishes'  className="query col-lg-8  col-6 border-0" />
            <button onClick={searchItems} className='btn col-3 col-lg-2 btn-light px-5 fw-bold rounded-end-4 rounded-start-0' style={{color:'#747474'}}>Search</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
export default Header
