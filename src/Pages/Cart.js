import React from "react";
import CartCard from "../Components/CartCard";
import Img from "../Assets/product.webp";
import "../Styles/cart.css";
import CartInfo from "../Components/CartInfo";
const Cart = () => {
  return (
    <div className="cart">
      <h3>Cart(1)</h3>
      <div className="cart-conatiner">
        <div className="cart-product-container">
          <CartCard imgName={Img} />
          <CartCard imgName={Img} />
          <CartCard imgName={Img} />
          <CartCard imgName={Img} />
          <CartCard imgName={Img} />
          <CartCard imgName={Img} />
        </div>
        <div>
          <CartInfo/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
