import React, { useContext } from "react";
import { ProductContext } from "../App";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import "../Styles/productListing.css";

const ProductListing = () => {
  const productData = useContext(ProductContext);

  return (
    <div className="product-listing">
      <Filter className="filter-container" />
      <div className="productcard-container">
        {productData.map((product, key) => {
          return (
            <ProductCard
              key={product.id}
              imgName={product.image}
              productName={product.title}
              productPrice={product.price}
              productDesciption={product.description}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
