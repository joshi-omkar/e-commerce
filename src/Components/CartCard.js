import React, { useState } from "react";
import "../Styles/cartcard.css";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

const CartCard = ({ product }) => {
  const { addToWishlist, wishlist, removeFromCart, updateCartItem } = useCart();
  const navigate = useNavigate();
  // const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  const handleGoToWishlist = () => {
    navigate("/wishlist");
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  }

  let disabledWishlist =
    wishlist.find((item) => item.id === product.id) !== undefined;

  return (
    <div className="cart-component">
      <img
        className="cart-img"
        src={product.image}
        alt={product.title}
      />
      <div className="cart-card-info">
        <p className="cart-title">{product.title}</p>
        <div className="cart-price">
          <p>{product.price}</p>
        </div>
        <div className="cart-quantity">
          <p>Quantity : </p>
          <button
            onClick={() => updateCartItem(product, "decrement")}
            disabled={product.qty > 1 ? false : true}
          >
            -
          </button>
          <p>{product.qty}</p>
          <button onClick={() => updateCartItem(product, "increment")}>
            +
          </button>
        </div>
        <div className="cart-button-container">
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
          {disabledWishlist ? (
            <button onClick={handleGoToWishlist}>Go To Wishlist</button>
          ) : (
            <button onClick={handleAddToWishlist}>Move to Wishlist</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
