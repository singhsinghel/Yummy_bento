import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import './PlaceOrder.css'
import {StoreContext} from '../../context/Context'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const {getTotalCartAmt,token,food_list,cartItems,url,totalAmount,selectedCouponCode} = useContext(StoreContext);
  const amount= totalAmount===0?getTotalCartAmt():parseInt(totalAmount);

  const [data,setData]=useState({
     firstName:'',
     lastName:'',
     email:'',
     street:'',
     city:'',
     state:'',
     zip:'',
     country:'',
     phone:''
  });

  const onChangeHandle=(event)=>{
     const {name,value}=event.target;
     setData({...data,
      [name]:value
     })
  };
  const placeorder=async(event)=>{
     event.preventDefault();
     let orderItems=[];
     
     //added quantity in cartItems
     food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo);
      }
     });
     let orderData={
      coupon:selectedCouponCode||'',
      address:data,
      items:orderItems,
      totalAmount:getTotalCartAmt()+20,
      amount:totalAmount===0?getTotalCartAmt()+20:parseInt(totalAmount)+20,
     }

    let response= await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
  }
  //it will run whenever the token is updated
  const navigate = useNavigate()
  useEffect(()=>{
    //if no user then will be redirected to cart
   if(!token)
    navigate('/cart')
  else if(getTotalCartAmt()===0)
    navigate('/cart')
  },[token])
  return (
    <div className="place-order mt-4">
  {/* Delivery Information Section */}
    <form onSubmit={placeorder}>
      <div className="placing-order row gap-5">
       <div className="del-info col-md-6">
    <h2>Delivery Information</h2>
      <div className="form-details gap-3">
        <div className="row name">
          <div className="col-md-6">
            <input
              name="firstName"
              onChange={onChangeHandle}
              value={data.firstName}
              placeholder="First Name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="lastName"
              onChange={onChangeHandle}
              value={data.lastName}
              placeholder="Last Name"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandle}
              placeholder="Email address"
              type="email"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <input
              name="street"
              value={data.street}
              onChange={onChangeHandle}
              placeholder="Street"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-3 city-state">
          <div className="col-md-6">
            <input
              name="city"
              value={data.city}
              onChange={onChangeHandle}
              placeholder="City"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="state"
              value={data.state}
              onChange={onChangeHandle}
              placeholder="State"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-3 country-zip">
          <div className="col-md-6">
            <input
              name="zip"
              value={data.zip}
              onChange={onChangeHandle}
              placeholder="Zip Code"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="country"
              value={data.country}
              onChange={onChangeHandle}
              placeholder="Country"
              type="text"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <input
              name="phone"
              value={data.phone}
              onChange={onChangeHandle}
              placeholder="Phone"
              type="tel"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
 
       </div>

       {/* Cart Totals Section */}
       <div className="totals col-md-5">
    <h2>Cart Totals</h2>

    <div className="subtotal d-flex justify-content-between">
      <p>Subtotal</p>
      <p>₹ {amount}</p>
    </div>
    <hr />

    <div className="deliv-fee d-flex justify-content-between">
      <p>Delivery Fee</p>
      <p>₹ {20}</p>
    </div>
    <hr />

    <div className="total d-flex justify-content-between">
      <p>Total</p>
      <p>₹ {amount+20}</p>
    </div>

    {/* Proceed to Checkout Button */}
    <button
      type='submit'
      style={{ backgroundColor: "tomato" }}
      className="btn text-light mt-3"
    >
      PROCEED TO CHECKOUT
    </button>
    
       </div>
     </div>
  </form>
</div>

  )
}

export default PlaceOrder
