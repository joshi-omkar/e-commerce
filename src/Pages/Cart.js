import React from 'react'
import CartCard from '../Components/CartCard'
import Img from "../Assets/product.webp";
const Cart = () => {
  return (
    <div>
      <h3>Cart</h3>
      <div>
        <CartCard imgName={Img} />
      </div>
    </div>
  )
}

export default Cart