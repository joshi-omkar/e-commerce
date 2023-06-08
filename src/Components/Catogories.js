import React from "react";
import categoryImg from "../Assets/Category.png";
import "../Styles/category.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useFilter } from "../context/filterContext";

const CategoryComponent = ({
  categoryImg,
  categoryTitle,
  selectedCategories,
  setSelectedCategories,
  handleFilterChange,
}) => {
  const navigate = useNavigate();

  const handleOnClickCategory = (category) => {
    setSelectedCategories(category);
    handleFilterChange("home-category", category);
    navigate(`/products`);
  };

  return (
    <div
      onClick={() => handleOnClickCategory(categoryTitle)}
      className="category"
    >
      <img src={categoryImg} alt={categoryTitle} />
      <h3>{categoryTitle}</h3>
    </div>
  );
};

const Catogories = () => {
  const { setSelectedCategories, selectedCategories, handleFilterChange } =
    useFilter();

  console.log(selectedCategories);

  const categories = [
    {
      categoryImg: categoryImg,
      categoryTitle: "Mens",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Jewelery",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Electronics",
    },
  ];

  return (
    <div className="categories">
      {categories.map((category, key) => {
        return (
          <CategoryComponent
            key={key}
            categoryImg={category.categoryImg}
            categoryTitle={category.categoryTitle}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            handleFilterChange={handleFilterChange}
          />
        );
      })}
    </div>
  );
};

export default Catogories;
