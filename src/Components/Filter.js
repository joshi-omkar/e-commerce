import React, { useState, useRef, useEffect } from "react";
import "../Styles/filter.css";
import { useFilter } from "../context/filterContext";

const FilterByPrice = ({ price, setPrice, handleChange }) => {
  const handleOnChangePrice = (event) => {
    setPrice(event.target.value);
    handleChange("price", event.target.value);
  };

  return (
    <div className="filter-price">
      <h3>Price</h3>
      <div className="price-slider">
        <div>
          <label htmlFor="price">{price} and above</label>
        </div>
        <input
          type="range"
          min="0"
          max="8000"
          value={price}
          onChange={handleOnChangePrice}
          className="slider"
          id="price"
        />
      </div>
    </div>
  );
};

const FilterByCategory = ({
  onCategoryChange,
  selectedCategories,
  setSelectedCategories,
}) => {
  const categories = [
    "Basketball",
    "Cricket",
    "Hockey",
    "Tennis",
    "Table Tennis",
    "Football",
  ];

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange("category", category);
  };

  return (
    <div className="filter-by-category">
      <h3>Categories</h3>
      <div className="checkbox-input-container">
        {categories.map((category, key) => (
          <div key={key} className="checkbox-input">
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterByRating = ({
  handleOptionChange,
  selectedOption,
  setSelectedRating,
}) => {
  const rating = [1, 2, 3, 4];

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
    handleOptionChange("rating", Number(event.target.value));
  };

  return (
    <div className="filter-by-rating">
      <h3>Rating</h3>
      <div className="radio-input-container">
        {rating.map((rate, key) => {
          return (
            <label key={key}>
              <input
                type="radio"
                name={rate}
                value={rate}
                checked={Number(selectedOption) === rate}
                onChange={handleRatingChange}
              />
              {rate} star and above
            </label>
          );
        })}
      </div>
    </div>
  );
};

const SortByPrice = ({ selectedOption, setSort, handleOptionChange }) => {
  const handleChangeSort = (event) => {
    setSort(event.target.value);
    handleOptionChange("sort", Number(event.target.value));
  };

  return (
    <div className="filter-by-rating">
      <h3>Sort by</h3>
      <div className="radio-input-container">
        <label>
          <input
            type="radio"
            name="low-to-high"
            value={0}
            checked={Number(selectedOption) === 0}
            onChange={handleChangeSort}
          />
          Price - low to high
        </label>
        <label>
          <input
            type="radio"
            name="low-to-high"
            value={1}
            checked={Number(selectedOption) === 1}
            onChange={handleChangeSort}
          />
          Price - high to low
        </label>
      </div>
    </div>
  );
};

const Filter = ({
  sort,
  setSort,
  selectedRating,
  setSelectedRating,
  handleFilterChange,
  selectedCategories,
  setSelectedCategories,
}) => {
  const { price, setPrice } = useFilter();

  return (
    <div className="filter-container">
      <div className="filter-heading-clear">
        <h3>Filters</h3>
        <button
          onClick={() => {
            handleFilterChange("clear");
            setPrice(0);
            setSelectedCategories([]);
            setSort();
            setSelectedRating(1);
          }}
        >
          Clear
        </button>
      </div>
      <FilterByPrice
        price={price}
        setPrice={setPrice}
        handleChange={handleFilterChange}
      />
      <FilterByCategory
        setSelectedCategories={setSelectedCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={handleFilterChange}
      />
      <FilterByRating
        handleOptionChange={handleFilterChange}
        selectedOption={selectedRating}
        setSelectedRating={setSelectedRating}
      />
      <SortByPrice
        handleOptionChange={handleFilterChange}
        selectedOption={sort}
        setSort={setSort}
      />
    </div>
  );
};

export default Filter;
