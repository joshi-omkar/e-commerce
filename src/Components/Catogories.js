import React from "react";
import categoryImg from "../Assets/Category.png";
import '../Styles/category.css'
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CategoryComponent = ({ categoryImg, categoryTitle, setCategory }) => {

  const navigate = useNavigate()

  const handleOnClickCategory = () =>{
    setCategory(categoryTitle)
    navigate(`/products`)
  }

  return (
    <div onClick={handleOnClickCategory} className="category">
      <img src={categoryImg} alt={categoryTitle} />
      <h3>{categoryTitle}</h3>
    </div>
  );
};

const Catogories = ({setCategory}) => {
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
              categoryImg={category.categoryImg}
              categoryTitle={category.categoryTitle}
              setCategory={setCategory}
            />
        );
      })}
    </div>
  );
};

export default Catogories;
