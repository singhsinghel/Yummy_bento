import React, { useContext } from 'react'
import './PlaceOrder.css'
import {StoreContext} from '../../context/Context'
const PlaceOrder = () => {
  const {getTotalCartAmt} = useContext(StoreContext)
  return (
    <div className="place-order mt-4 row gap-5">
  {/* Delivery Information Section */}
  <div className="del-info col-md-6">
    <h2>Delivery Information</h2>
    <form>
      <div className="form-details gap-3">
        <div className="row name">
          <div className="col-md-6">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="lastName"
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
              placeholder="City"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="state"
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
              placeholder="Zip Code"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              name="country"
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
              placeholder="Phone"
              type="tel"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>
    </form>
  </div>

  {/* Cart Totals Section */}
  <div className="totals col-md-5">
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
      <p>₹ {getTotalCartAmt() + 20}</p>
    </div>

    {/* Proceed to Checkout Button */}
    <div
      onClick={() => {
        navigate("/order");
      }}
      style={{ backgroundColor: "tomato" }}
      className="btn text-light mt-3"
    >
      PROCEED TO CHECKOUT
    </div>
  </div>
</div>

  )
}

export default PlaceOrder
