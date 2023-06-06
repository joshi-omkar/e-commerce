import React, { useEffect, useState } from "react";
import WishlistCard from "../Components/WishlistCard";
import { useCart } from "../context/cartContext";
import Loader from "../Assets/Loader";

const Wishlist = () => {
  const { wishlist, getWishlist, showLoader } = useCart();

  useEffect(() => {
    getWishlist();
  }, []);

  const ShowNothingOnPage = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Such A Empty Cart!!</h3>
      </div>
    );
  };

  return (
    <>
      {showLoader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : wishlist.length === 0 ? (
        <ShowNothingOnPage />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          {wishlist?.map((item, key) => {
            return (
              <div>
                <WishlistCard
                  id={item.id}
                  imgName={item.image}
                  productName={item.title}
                  productPrice={item.price}
                  productDesciption={item.description}
                  item={item}
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Wishlist;
