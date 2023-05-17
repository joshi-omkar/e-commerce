import React from "react";
import '../Styles/cartinfo.css'

const CartInfo = () => {
  return (
    <div className="cart-details">
      <h3>PRICE DETAILS</h3>
      <div className="divider"></div>
      <div className="cart-details-price">
        <span>
          <label>Price(1 Item)</label>
          <label>2000</label>
        </span>
        <span>
          <label>Discount</label>
          <label> - 2000</label>
        </span>
        <span>
          <label>Delivery Charges</label>
          <label>2000</label>
        </span>
      </div>
      <div className="divider"></div>
      <div className="cart-details-total">
        <label>Total Amount</label>
        <label>2000</label>
      </div>
      <div className="divider"></div>
      <div className="discount-info">
        <p>You will save 1000 on this order </p>
      </div>
      <button className="place-order">Place Order</button>
    </div>
  );
};

export default CartInfo;
