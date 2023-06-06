import React, { useState } from "react";
import Wishlist from "../Assets/Wishlist";
import RedHeartIcon from "../Assets/red-heart-icon";

const WishlistButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleOnClickWishlist = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {clicked ? (
        <div
          onClick={handleOnClickWishlist}
          className="wishlist-logo"
        >
          <RedHeartIcon />
        </div>
      ) : (
        <div
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
