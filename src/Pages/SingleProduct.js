import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/single-product.css";
import WishlistButton from "../Components/WishlistButton";
import Wishlist from "../Assets/Wishlist";
import RedHeartIcon from "../Assets/red-heart-icon";
import axios from "axios";
import { useCart } from "../context/cartContext";
import Loader from "../Assets/Loader";

const SingleProduct = () => {
  const { addToCart, addToWishlist, removeFromWishlist } = useCart();
  const [product, setProduct] = useState([]);
  const [addedToCart, SetAddedToCart] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getProductData = async () => {
    setShowLoader(true);
    await axios
      .get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
    setShowLoader(false);
  };

  console.log(product)

  const handleToAddInCart = (e) => {
    e.preventDefault();
    SetAddedToCart(true);
    addToCart(product);
  };

  const handleGoToCartPage = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
    addToWishlist(product);
  };

  const handleRemoveFromWishlist = () => {
    setClicked(!clicked);
    removeFromWishlist(product);
  };

  useEffect(() => {
    getProductData();
  }, [id]);
  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className="single-product">
          <div className="single-product-container">
            <img src={product.image} alt={product.title} />
            <div className="single-product-info">
              <div className="single-product-wishlist">
                <>
                  {clicked ? (
                    <div
                      onClick={handleRemoveFromWishlist}
                      className="wishlist-logo"
                    >
                      <RedHeartIcon />
                    </div>
                  ) : (
                    <div
                      onClick={handleOnClickWishlist}
                      className="wishlist-logo"
                    >
                      <Wishlist />
                    </div>
                  )}
                </>
              </div>
              <h3>{product.title}</h3>
              <p className="single-product-description">
                {product.description}
              </p>
              <p className="single-product-price">&#8377;{product.price}</p>
              {addedToCart ? (
                <button onClick={handleGoToCartPage} className="add-to-cart">
                  Go To Cart
                </button>
              ) : (
                <button onClick={handleToAddInCart} className="add-to-cart">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
