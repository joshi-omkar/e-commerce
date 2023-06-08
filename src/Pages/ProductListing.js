import React, { useState, useEffect } from "react";
import Filter from "../Components/Filter";
import ProductCard from "../Components/ProductCard";
import "../Styles/productListing.css";
import axios from "axios";
import { useCart } from "../context/cartContext";
import { useFilter } from "../context/filterContext";
import Loader from "../Assets/Loader";

const ProductListing = ({ category, setCategory }) => {
  const { productData, setProductData, showLoader } = useCart();
  const { filteredData, categoricalData, products, filterData } = useFilter();
  // const { setProductList, productList } = useCart();
  const [price, setPrice] = useState(null);
  // const [category, setCategory] = useState(null);
  const [filterPrice, setFilterPrice] = useState(0);
  const [selectedRating, setSelectedRating] = useState(1);
  const [sort, setSort] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "category":
        if (selectedCategories.includes(value)) {
          setSelectedCategories(
            selectedCategories.filter((category) => category !== value)
          );
        } else {
          setSelectedCategories([...selectedCategories, value]);
        }
        break;

      case "price":
        setFilterPrice(value);
        break;

      case "rating":
        setSelectedRating(value);
        break;

      case "sort":
        setSort(value);
        break;

      case "clear":
        setSelectedCategories([]);
        setFilterPrice(0);
        setSelectedRating(1);
        setSort();
        break;

      default:
        break;
    }
  };

  const itemsToShow = filterData(
    productData,
    selectedCategories,
    filterPrice,
    selectedRating,
    sort
  );
  console.log(itemsToShow);
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
