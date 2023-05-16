import React from "react";

const CartCard = ({ imgName, productName, productPrice }) => {

  return (
    <div>
      <img src={imgName} alt={productName} />
      <div>
        <p>Mens shirt</p>
        <div>
          <p>Rs. 2000</p>
          <p>Rs. 3000</p>
        </div>
        <p>50% off</p>
        <div>
          <p>Quantity</p>
          <button>-</button>
          <p>3</p>
          <button>+</button>
        </div>
        <div>
          <button>
            <p>Remove from Cart</p>
          </button>
          <button>
            <p>Move to Wishlish</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
