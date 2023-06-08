import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { useCart } from "./cartContext";

export const filterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const { productData } = useCart();
  const [categoricalData, setCategoricalData] = useState(productData);
  const [filteredData, setFilteredData] = useState(categoricalData);
  const [price, setPrice] = useState(0);
  const filterData = (
    productData,
    selectedCategories,
    priceRange,
    selectedRating,
    sortOption
  ) => {
    
    let filteredData = [...productData];
    // Filter by category
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    // Filter by price range
    if (priceRange > 0) {
      filteredData = filteredData.filter((item) => Number(item.price) >= price);
    }
    // console.log(filteredData)


    // Filter by rating
    if (selectedRating > 0) {
      filteredData = filteredData.filter(
        (item) => item.rating.rate >= selectedRating
      );
    }
    // console.log(filteredData)


    // Sort by price
    if (sortOption === 0) {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOption === 1) {
      filteredData.sort((a, b) => b.price - a.price);
    }

    console.log(filteredData)

    return filteredData;
  };

  return (
    <filterContext.Provider
      value={{
        setPrice,
        price,
        setFilteredData,
        filteredData,
        categoricalData,
        setCategoricalData,
        filterData,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => useContext(filterContext);
