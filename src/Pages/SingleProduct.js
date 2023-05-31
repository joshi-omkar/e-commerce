import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../App";
import "../Styles/single-product.css";
import Wishlist from "./Wishlist";
import WishlistButton from "../Components/WishlistButton";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const productData = useContext(ProductContext);

  useEffect(() => {
    setProduct(productData.find((product) => product.id === id));
  }, [productData]);

  return (
    <div className="single-product">
      <WishlistButton top={"28%"} right={"13%"} />
      <div className="single-product-container">
        <img src={product.image} alt={product.title} />
        <div className="single-product-info">
          <h3>{product.title}</h3>
          <p className="single-product-description">{product.description}</p>
          <p className="single-product-price">&#8377;{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
