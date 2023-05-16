import React from "react";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import Img from "../Assets/product.webp";
import "../Styles/productListing.css";

const ProductListing = () => {
  return (
    <div className="product-listing">
      <Filter className="filter-container"/>
      <div className="productcard-container">
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />

        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
        <ProductCard
          imgName={Img}
          productName={"Shirt for Mens"}
          productPrice={"Rs. 2000"}
        />
      </div>
    </div>
  );
};

export default ProductListing;
