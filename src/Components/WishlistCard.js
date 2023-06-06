import React, { useState, useEffect } from "react";
import Wishlist from "../Assets/Wishlist";
import "../Styles/productListing.css";
import RedHeartIcon from "../Assets/red-heart-icon";
import { Link, useNavigate } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import axios from "axios";
import { useCart } from "../context/cartContext";
import { useAuthContext } from "../context/authContext";

const WishlistCard = ({
  imgName,
  productName,
  productPrice,
  productDesciption,
  id,
  rating,
}) => {
  const [clicked, setClicked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();
  const { isLoggedIn } = useAuthContext();

  let disabledWishlist = wishlist.find((item) => item.id === id) !== undefined;

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
  };

  const item = {
    imgName,
    productName,
    productPrice,
    productDesciption,
    id,
  };

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setErrorMessage(true);
      setError("Go to Login");
    } else {
      addToCart(item);
      const timer = setTimeout(() => {
        setAddedToCart(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  const token = localStorage.getItem("token");

  const handleGoToCart = () => {
    navigate("/cart");
  };

  const handleRemoveFromWishlist = () => {
    setClicked(!clicked);
    removeFromWishlist(item);
  };

  const handleGoToLoginPage = () => {
    navigate("/login");
  };
  return (
    <div style={{ marginTop: "-45px" }}>
      <div>
        <div
          style={{ top: "57px", left: "241px" }}
          className="product-wishlist"
        >
          <div onClick={handleRemoveFromWishlist} className="wishlist-logo">
            <RedHeartIcon />
          </div>
        </div>
        <Link to={`/product/${id}`} className="product-card">
          <div
            style={
              rating < 2.5
                ? { backgroundColor: "#f02626" }
                : rating < 4
                ? { backgroundColor: "#f0d026" }
                : { backgroundColor: "#2cf026" }
            }
            className="ratings"
          >
            {rating} &#9733;
          </div>
          <img src={imgName} alt={imgName} />
          <div className="product-info">
            <h3>{productName}</h3>
            <p className="product-description">{productDesciption}</p>
            <p className="product-price">&#8377; {productPrice}</p>
          </div>
        </Link>

        <button
          onClick={
            error.length > 0
              ? handleGoToLoginPage
              : addedToCart
              ? handleGoToCart
              : handleAddToCart
          }
          className="add-to-cart-button"
        >
          {error.length > 0
            ? error
            : addedToCart
            ? "Go to Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
