import React from "react";
import categoryImg from "../Assets/Category.png";
import '../Styles/category.css'
import { useNavigate } from "react-router-dom";

const CategoryComponent = ({ categoryImg, categoryTitle }) => {

  const navigate = useNavigate()

  const handleOnClickCategory = () =>{
    navigate(`/products/${categoryTitle.toLowerCase()}`)
  }

  return (
    <div onClick={handleOnClickCategory} className="category">
      <img src={categoryImg} alt={categoryTitle} />
      <h3>{categoryTitle}</h3>
    </div>
  );
};

const Catogories = () => {
  const categories = [
    {
      categoryImg: categoryImg,
      categoryTitle: "Mens",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Womens",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Kids",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Electronics",
    },
    {
      categoryImg: categoryImg,
      categoryTitle: "Home",
    },
  ];

  return (
    <div className="categories">
      {categories.map((category, key) => {
        return (
            <CategoryComponent
              categoryImg={category.categoryImg}
              categoryTitle={category.categoryTitle}
            />
        );
      })}
    </div>
  );
};

export default Catogories;
