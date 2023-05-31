import React, { useState } from "react";
import Wishlist from "../Assets/Wishlist";
import RedHeartIcon from "../Assets/red-heart-icon";

const WishlistButton = ({ top, left, right, bottom }) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {clicked ? (
        <div
          style={{ top: top, left: left, right: right, bottom: bottom }}
          onClick={handleOnClickWishlist}
          className="wishlist-logo"
        >
          <RedHeartIcon />
        </div>
      ) : (
        <div
          style={{ top: top, left: left, right: right, bottom: bottom }}
          onClick={handleOnClickWishlist}
          className="wishlist-logo"
        >
          <Wishlist />
        </div>
      )}
    </>
  );
};

export default WishlistButton;
