import React, { useState } from "react";
import Wishlist from "../Assets/Wishlist";
import "../Styles/productListing.css";
import RedHeartIcon from "../Assets/red-heart-icon";
import { useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";

const ProductCard = ({ imgName, productName, productPrice, productDesciption, id }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate()

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
  };

  const handleOnClickProduct = () => {
    navigate(`/product/${id}`)
  }

  return (
    <>
      <div className="product-card" onClick={handleOnClickProduct}>
        {/* {clicked ? (
          <>
            <div onClick={handleOnClickWishlist} className="wishlist-logo">
              <RedHeartIcon />
            </div>
          </>
        ) : (
          <>
            <div onClick={handleOnClickWishlist} className="wishlist-logo">
              <Wishlist />
            </div>top: 4%;
  left: 78%;
          </>
        )} */}
        <WishlistButton top={'4%'} left={'78%'} />

        <img src={imgName} alt={imgName} />
        <div className="product-info">
          <h3>{productName}</h3>
          <p className="product-description">{productDesciption}</p>
          <p className="product-price">&#8377; {productPrice}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductCard;
