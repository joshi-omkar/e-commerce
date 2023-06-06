import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { useCart } from "./cartContext";

export const filterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const { productData } = useCart();
  const [products, setProducts] = useState([]);
  const [categoricalData, setCategoricalData] = useState(productData);
  const [filteredData, setFilteredData] = useState(categoricalData);
  const [ratingData, setRatingData] = useState(categoricalData);
  const [sortData, setSortData] = useState(categoricalData);
  const [price, setPrice] = useState(0);

  const getPrice = () => {
    const priceFilterOn = sortData.length === 0 ? productData : sortData
    const filteredPriceData = priceFilterOn?.filter(
      (item) => Number(item.price) >= price
    );
    setProducts(filteredPriceData);
  };

  const filterData = (selectedCategories) => {
    const filteredData = productData.filter((item) =>
      selectedCategories.includes(item.category)
    );
    setProducts(filteredData);
    setCategoricalData(filteredData);
  };

  const getRating = (rate) => {
    const ratingFilterOn = categoricalData.length === 0 ? productData : categoricalData
    const filterByRating = ratingFilterOn.filter((item) => item.rating.rate >= rate)
    setProducts(filterByRating);
    setRatingData(filterByRating);
  }

  const getSortData = (sort) => {
    const ratingFilterOn = ratingData.length === 0 ? productData : ratingData
    if (Number(sort) === 0) {
      setProducts([...ratingFilterOn].sort((a, b) => a.price - b.price));
      setSortData([...ratingFilterOn].sort((a, b) => a.price - b.price));
    } else if (Number(sort) === 1) {
      setProducts([...ratingFilterOn].sort((a, b) => b.price - a.price));
      setSortData([...ratingFilterOn].sort((a, b) => b.price - a.price));
    } else {
      setProducts(ratingFilterOn);
      setSortData(ratingData);
    }
  };

  return (
    <filterContext.Provider
      value={{
        getPrice,
        setPrice,
        price,
        setFilteredData,
        filteredData,
        categoricalData,
        setCategoricalData,
        // getCategory,
        products,
        getRating,
        getSortData,
        filterData
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
