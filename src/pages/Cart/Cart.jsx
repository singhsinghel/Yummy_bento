import React, { useContext, useEffect, useState,useRef } from 'react'
import {StoreContext} from '../../context/Context'
import axios from 'axios'
import './Cart.css'
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const {url}=useContext(StoreContext)
  const navigate=useNavigate();
  const {cartItems,food_list,removeItem, getTotalCartAmt,token,totalAmount,setTotalAmount} = useContext(StoreContext);
  const [coupon, setCoupon]=useState([]);
  const [showCoupons,setShowCoupons]=useState(false)
  const [selectedCoupon, setSelectedCoupon] = useState('');
  const[discount,setDiscount]=useState();
  const inputRef = useRef(null);
  const couponRef = useRef(null);

  const getCodes=async(event)=>{
     let response= await axios.post(url+'/api/order/discount',{},{headers:{token}});
     if(response.data.success){
        setCoupon(response.data.data);
     }
  }
  const handleInputClick = () => {
    getCodes()
    setShowCoupons(true);
  };
  
  const handleCouponClick = (item) => {
    setSelectedCoupon(item.name);
    setShowCoupons(false); 
    setDiscount(item.discount)
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) && !couponRef.current.contains(event.target)) {
        setShowCoupons(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const getDiscount=(event)=>{
    event.preventDefault()
    if(discount){
     setTotalAmount((discount/100)* getTotalCartAmt())
    }
  }
  return (
    <div className='container'>
      <div className="cart-items">
        <div className="cart-items-title row  text-center">
        <p className='col-2'>Items</p>
        <p className='col-2'>Title</p>
        <p className='col-2'>Price</p>
        <p className='col-2'>Quantity</p>
        <p className='col-2'>Total</p>
        <p className='col-2'>Remove</p>
        </div>
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={index} className='cart-items-title cart-items-item row mt-3 text-center'>
                <div className="img col-2">
                  <img className='cart-img rounded-3' style={{width:'4rem'}}  src={`${url}/images/${item.image}`} alt="" />
                  </div>
                  <p className='col-2'>{item.name}</p>
                  <p className='col-2'>{item.price}</p>
                  <p className='col-2'>{cartItems[item._id]}</p>
                  <p className='col-2'>₹ {item.price*cartItems[item._id]}</p>
                  <div className="delete col-2 text-center">
                  <p onClick={()=>removeItem(item._id)} className='text-danger fw-bolder cursor-pointer'>X</p>
                  </div>
              </div>
            )
          }
        })}
        </div>
        <div className="checkout-coupon mt-4 gap-4 d-flex flex-column-reverse flex-md-row justify-content-around">
          <div className="totals w-50 ">
            <h2>Cart Totals</h2>
            <div className="subtotal d-flex justify-content-between">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmt()}</p>
            </div>
            <hr />
            {totalAmount &&(
              <div>
              <div className="discount d-flex justify-content-between">
               <p>Coupon Discount</p>
               <p className='text-success'>₹ {getTotalCartAmt()-totalAmount}</p>
            </div>
            <hr />
            </div>
            )
            }
            <div className="deliv-fee d-flex justify-content-between">
              <p>Delivery Fee</p>
              <p>₹ {20}</p>
            </div>
            <hr />
            <div className="total d-flex justify-content-between">
              <p>Total</p>
              <p className='fw-semibold'>₹ {!totalAmount?getTotalCartAmt()+20:totalAmount+20}</p>
            </div>
            <div onClick={()=>{navigate('/order')}} style={{backgroundColor:'tomato'}} className="btn text-light">PROCEED TO CHECKOUT</div>
          </div>
          <div className="coupon">
            <p>If you have any promo code, Enter here</p>
            <form onSubmit={getDiscount}>
              <div className="row">
                <div className="input col-7 p-0 position-relative">
                 <input
                 ref={inputRef}
                 onFocus={handleInputClick}  
                 placeholder='promocode' 
                 className={`form-control rounded-start-3 rounded-end-0`}
                 style={{ borderRadius: showCoupons ? '4rem !important' : '0' }}
                 type="text" 
                 value={selectedCoupon}
                 readOnly
                />
                {showCoupons&&(
                  coupon?
                      <div 
                      className="coupon-codes position-absolute" 
                      ref={couponRef}>
                        <ul>
                          {coupon.map((item,index) => (
                            <li className='cursor-pointer fw-light' key={index} onClick={() => handleCouponClick(item)}>{item.name}</li>
                          ))}
                        </ul>
                       </div>
                       :
                       <div className="no-coupon">
                        <h4>No coupons available</h4>
                       </div>
                     )}
              </div>
              <button type='submit' className="btn btn-dark col-3 rounded-start-0">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Cart
