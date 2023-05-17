import React from "react";
import '../Styles/cartcard.css'

const CartCard = ({ imgName, productName, productPrice }) => {

  return (
    <div className="cart-component">
      <img className="cart-img" src={imgName} alt={productName} />
      <div className="cart-card-info">
        <p className="cart-title">Mens shirt</p>
        <div className="cart-price">
          <p>Rs. 2000</p>
          <p>Rs. 3000</p>
        </div>
        <p className="cart-discount">50% off</p>
        <div className="cart-quantity">
          <p>Quantity : </p>
          <button>-</button>
          <p>3</p>
          <button>+</button>
        </div>
        <div className="cart-button-container">
          <button>
            Remove from Cart
          </button>
          <button>
            Move to Wishlish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
