import React, { useContext } from 'react'
import {StoreContext} from '../../context/Context'
import './Cart.css'
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const {url}=useContext(StoreContext)
  const navigate=useNavigate();
  const {cartItems,food_list,removeItem, getTotalCartAmt} = useContext(StoreContext)
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
            <div className="deliv-fee d-flex justify-content-between">
              <p>Delivery Fee</p>
              <p>₹ {20}</p>
            </div>
            <hr />
            <div className="total d-flex justify-content-between">
              <p>Total</p>
              <p>₹ {getTotalCartAmt()+20}</p>
            </div>
            <div onClick={()=>{navigate('/order')}} style={{backgroundColor:'tomato'}} className="btn text-light">PROCEED TO CHECKOUT</div>
          </div>
          <div className="coupon ">
            <p>If you have any promo code, Enter here</p>
            <form action="">
              <div className="row">
                <div className="input col-7 p-0">
                 <input placeholder='promocode' className=' form-control rounded-start-3 rounded-end-0' type="text" />
              </div>
              <button className="btn btn-dark col-3 rounded-start-0">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Cart
