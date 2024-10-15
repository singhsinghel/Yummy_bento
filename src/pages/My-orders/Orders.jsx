
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/Context';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
import './orders.css'
const Orders = () => {
    const {url,token}=useContext(StoreContext)
    const [orders,setOrders]=useState([]);
    const getOrders=async()=>{ 
        let response = await axios.post(url+"/api/order/userorders",{},{headers:{token:token}});
        if(response.data.success){
            setOrders(response.data.data);
            
        }
    }
    useEffect(()=>{
        if(token)
          getOrders()
        
    },[token])
  return (
    <div className='show-orders'>
        <h2 className='fw-bolder'>My orders</h2>
        <div className="container">
        {
            orders.map((order,index)=>{
               return(
                <div key={index} className="my-orders-order">
                    <img src={assets.parcel_icon} alt="" />
                    <p>{order.items.map((item,index)=>{
                        //condition for last item. To remove the comma
                        if(index===order.items.length-1)
                            return  item.name+" X "+item.quantity
                        else 
                            return item.name+" X "+item.quantity+', '
                    })}</p>
                   <p>₹ { order.amount}.00</p>
                   <p>Items: {order.items.length}</p>
                   <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                   <button className='btn'> Track order</button>
                </div>
               )
            })
        }
        </div>
    </div>
  )
}

export default Orders
