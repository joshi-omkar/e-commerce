import React, { useState, useEffect } from "react";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import "../Styles/productListing.css";
import axios from "axios";
import { useCart } from "../context/cartContext";
import { useFilter } from "../context/filterContext";
import Loader from "../Assets/Loader";

const ProductListing = () => {
  const { productData, setProductData, showLoader } = useCart();
  const { filteredData, categoricalData, products } = useFilter();
  // const { setProductList, productList } = useCart();
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const getProductData = () => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);

  const itemsToShow = products.length === 0 ? productData : products;

  return (
    <div className="product-listing">
      <Filter
        price={price}
        setPrice={setPrice}
        category={category}
        setCategory={setCategory}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        className="filter-container"
      />
      <>
        {showLoader ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className="productcard-container">
            {itemsToShow?.map((product, key) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  id={product.id}
                  top={"245px"}
                  left={"55px"}
                  rating={product.rating.rate}
                />
              );
            })}
          </div>
        )}
      </>
    </div>
  );
};

export default ProductListing;
