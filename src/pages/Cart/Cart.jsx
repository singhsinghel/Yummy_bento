import React, { useContext } from 'react'
import {StoreContext} from '../../context/Context'
import './Cart.css'
const Cart = () => {
  const {cartItems,food_list,removeItem} = useContext(StoreContext)
  return (
    <div>
      <div className="cart-items">
        <div className="cart-items-title row text-center">
        <p className='col-2'>Items</p>
        <p className='col-2'>Title</p>
        <p className='col-2'>Price</p>
        <p className='col-2'>Quantity</p>
        <p className='col-2'>Total</p>
        <p className='col-2'>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={index} className='cart-items-title cart-items-item row mt-3 text-center'>
                <div className="img col-2">
                  <img style={{width:'4rem'}}  src={item.image} alt="" />
                  </div>
                  <p className='col-2'>{item.name}</p>
                  <p className='col-2'>{item.price}</p>
                  <p className='col-2'>{cartItems[item._id]}</p>
                  <p className='col-2'>$ {item.price*cartItems[item._id]}</p>
                  <div className="delete col-2 text-center">
                  <p onClick={()=>removeItem(item._id)} className='text-danger fw-bolder cursor-pointer'>X</p>
                  </div>
              </div>
            )
          }
        })}
        </div>
        <div className="checkout-coupon d-flex justify-content-between">
          <div className="totals">
            <h2>Cart Totals</h2>
            <div className="subtotal">
              <p>Subtotal</p>
              <p>{}</p>
            </div>
            <hr />
            <div className="deliv-fee">
              <p>Delivery Fee</p>
              <p>{}</p>
            </div>
            <hr />
            <div className="total">
              <p>Total</p>
              <p>{}</p>
            </div>
            <div style={{backgroundColor:'tomato'}} className="btn text-light">Checkout</div>
          </div>
          <div className="coupon ">
            <p>If you have any promo code, Enter here</p>
            <form action="">
              <div className="row ">
                <div className="input col-8 p-0">
                 <input className=' form-control rounded-start-5' type="text" />
              </div>
              <button className="btn btn-dark col-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Cart
