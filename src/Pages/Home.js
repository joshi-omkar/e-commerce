import React from "react";
import Catogories from "../Components/Catogories";
import "../Styles/home.css";
import HomePoster from "../Components/HomePoster";
import posterImg from "../Assets/posterImg.png";
import NewArrival from "../Components/NewArrivalCard";

const Home = () => {
  return (
    <div className="home">
      <Catogories />
      <HomePoster posterImg={posterImg} />
      <NewArrival />
    </div>
  );
};

export default Home;
