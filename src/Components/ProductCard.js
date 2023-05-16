import React, { useState } from "react";
import Wishlist from "../Assets/Wishlist";
import "../Styles/productListing.css";
import RedHeartIcon from "../Assets/red-heart-icon";

const ProductCard = ({ imgName, productName, productPrice }) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="product-card">
        {clicked ? (
          <>
            <div onClick={handleOnClickWishlist} className="wishlist-logo">
              <RedHeartIcon />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleOnClickWishlist} className="wishlist-logo">
              <Wishlist />
            </div>
          </>
        )}

        <img src={imgName} alt={imgName} />
        <div className="product-info">
          <h3>{productName}</h3>
          <p>{productPrice}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
