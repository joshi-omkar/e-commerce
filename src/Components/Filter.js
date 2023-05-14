import React, { useState, useRef } from "react";
import "../Styles/filter.css";

const FilterByPrice = ({ price, handleChange }) => {
  return (
    <div className="filter-price">
      <h3>Price</h3>
      <div className="price-slider">
        <div>
          <label htmlFor="price">50</label>
          <label htmlFor="price">100</label>
          <label htmlFor="price">150</label>
        </div>
        <input
          type="range"
          min="50"
          max="150"
          value={price}
          onChange={handleChange}
          className="slider"
          id="price"
        />
      </div>
    </div>
  );
};

const FilterByCategory = ({ categories }) => {
  const checkboxRef = useRef(null);

  const handleClick = () => {
    checkboxRef.current.click();
  };

  return (
    <div className="filter-by-category">
      <h3>Category</h3>
      <div className="checkbox-input-container">
        {categories.map((category, key) => {
          return (
            <div className="checkbox-input" onClick={handleClick}>
              <label className="">
                <input type="checkbox" ref={checkboxRef} />
                {category} Category
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FilterByRating = ({ rating }) => {
  const [selectedOption, setSelectedOption] = useState(4);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="filter-by-rating">
      <h3>Rating</h3>
      <div className="radio-input-container">
        {rating.map((rate, key) => {
          return (
            <label>
              <input
                type="radio"
                name={rate}
                value={rate}
                checked={Number(selectedOption) === rate}
                onChange={handleOptionChange}
              />
              {rate} star and above
            </label>
          );
        })}
      </div>
    </div>
  );
};

const SortByPrice = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
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
            onChange={handleOptionChange}
          />
          Price - low to high
        </label>
        <label>
          <input
            type="radio"
            name="low-to-high"
            value={1}
            checked={Number(selectedOption) === 1}
            onChange={handleOptionChange}
          />
          Price - high to low
        </label>
      </div>
    </div>
  );
};

const Filter = () => {
  const [price, setPrice] = useState(50);

  function handleChange(event) {
    setPrice(event.target.value);
  }

  const categories = ["Mens", "Womens", "Kids"];

  const rating = [4, 3, 2, 1];

  return (
    <div className="filter-container">
      <div className="filter-heading-clear">
        <h3>Filters</h3>
        <button>Clear</button>
      </div>
      <FilterByPrice price={price} handleChange={handleChange} />
      <FilterByCategory categories={categories} />
      <FilterByRating rating={rating} />
      <SortByPrice />
    </div>
  );
};

export default Filter;
