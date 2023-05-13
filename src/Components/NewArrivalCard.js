import React from "react";
import newArrivals from "../Assets/newArrivals.png";
import '../Styles/newArrivals.css'
const NewArrivalCard = ({ image, title, description }) => {
  return (
    <div className="newArrival-card">
      <img src={image} alt="title" />
      <div>
        <p>NEW ARRIVALS</p>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const NewArrival = () => {
  const newArrailData = [
    {
      newArrailImage: newArrivals,
      newArrailTitle: "Summer Collection",
      newArrailDescription:
        "Check out our best winter collection to stay warm in style this season",
    },
    {
      newArrailImage: newArrivals,
      newArrailTitle: "Summer Collection",
      newArrailDescription:
        "Check out our best winter collection to stay warm in style this season",
    },
    {
      newArrailImage: newArrivals,
      newArrailTitle: "Summer Collection",
      newArrailDescription:
        "Check out our best winter collection to stay warm in style this season",
    },
  ];

  return (
    <div className="newArrivals">
      {newArrailData.map((newArrival, key) => {
        return (
          <NewArrivalCard
            image={newArrival.newArrailImage}
            title={newArrival.newArrailTitle}
            description={newArrival.newArrailDescription}
          />
        );
      })}
    </div>
  );
};

export default NewArrival;
