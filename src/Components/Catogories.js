import React from "react";
import categoryImg from "../Assets/Category.png";
import Slider from "react-slick";
import "../Styles/category.css";
import { useNavigate } from "react-router-dom";
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

  const categories = [
    {
      categoryImg: categoryImg,
      categoryTitle: "Football",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Table Tennis",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Tennis",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Hockey",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Cricket",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Basketball",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div style={{margin: '0 20px'}}>
    <Slider {...settings}>
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
    </Slider>
    </div>
  );
};

export default Catogories;
