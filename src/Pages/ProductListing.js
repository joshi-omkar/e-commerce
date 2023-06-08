import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import "../Styles/productListing.css";
import axios from "axios";
import { useCart } from "../context/cartContext";
import { useFilter } from "../context/filterContext";
import Loader from "../Assets/Loader";

const ProductListing = () => {
  const { productData, setProductData, showLoader } = useCart();
  const {
    filterData,
    handleFilterChange,
    setSelectedCategories,
    selectedCategories,
    setSort,
    sort,
    setSelectedRating,
    selectedRating,
    setFilterPrice,
    filterPrice,
  } = useFilter();

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

  const itemsToShow = filterData(
    productData,
    selectedCategories,
    filterPrice,
    selectedRating,
    sort
  );
  return (
    <div className="product-listing">
      <Filter
        price={filterPrice}
        setPrice={setFilterPrice}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        sort={sort}
        setSort={setSort}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        handleFilterChange={handleFilterChange}
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
                  key={key}
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
