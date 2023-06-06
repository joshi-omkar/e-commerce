import React, { useState, useRef, useEffect } from "react";
import "../Styles/filter.css";
import { useFilter } from "../context/filterContext";

const FilterByPrice = ({ price, handleChange }) => {
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
          max="500"
          value={price}
          onChange={handleChange}
          className="slider"
          id="price"
        />
      </div>
    </div>
  );
};

const FilterByCategory = ({ onCategoryChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ["Mens", "Jewelery", "Electronics"]

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories); 
  };

  return (
    <div className="filter-by-category">
      <h3>Category</h3>
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
              {category} Category
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

const FilterByRating = ({
  rating,
  handleOptionChange,
  selectedOption,
  setSelectedOption,
}) => {
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

const SortByPrice = ({ selectedOption, handleOptionChange }) => {
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
  const { price, setPrice, getPrice, getCategory, getRating, getSortData, filterData } =
    useFilter();
  const [seletcedCategory, setSelectedCategory] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(1);
  const [sort, setSort] = useState();

  const handleCategoryChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
    // getCategory(event.target.value);
    filterData(selectedCategories)
  };

  const handleSortData = (event) => {
    setSort(event.target.value);
    getSortData(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedRating(event.target.value);
    getRating(event.target.value);
  };

  function handleChange(event) {
    setPrice(Number(event.target.value));
    getPrice();
  }

  useEffect(() => {
    // getCategory(seletcedCategory);
    // getSortData(sort)
  }, []);

  const rating = [1, 2, 3, 4];

  return (
    <div className="filter-container">
      <div className="filter-heading-clear">
        <h3>Filters</h3>
        <button>Clear</button>
      </div>
      <FilterByPrice price={price} handleChange={handleChange} />
      <FilterByCategory
        selectedCategory={seletcedCategory}
        setSelectedCategory={setSelectedCategory}
        // categories={categories}
        onCategoryChange={handleCategoryChange} 
        // handleOptionChange={handleCategoryChange}
      />
      <FilterByRating
        handleOptionChange={handleOptionChange}
        selectedOption={selectedRating}
        setSelectedOption={setSelectedRating}
        rating={rating}
      />
      <SortByPrice handleOptionChange={handleSortData} selectedOption={sort} />
    </div>
  );
};

export default Filter;
