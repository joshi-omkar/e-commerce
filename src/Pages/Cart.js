import React, { useEffect } from "react";
import CartCard from "../Components/CartCard";
import "../Styles/cart.css";
import CartInfo from "../Components/CartInfo";
import { useCart } from "../context/cartContext";
import Loader from "../Assets/Loader";
const Cart = () => {
  const { showLoader, cartProducts, getCart } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  const ShowNothingOnPage = () => {
    return (
      <div>
        <h3>Such A Empty Cart!!</h3>
      </div>
    );
  };

  return (
    <div className="cart">
      <h3>Cart(1)</h3>
      <div className="cart-conatiner">
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
          ) : cartProducts?.length === 0 ? (
            <ShowNothingOnPage />
          ) : (
            <div className="cart-product-container">
              {cartProducts?.map((cartItem, key) => {
                return (
                  <CartCard
                    key={cartItem.id}
                    product={cartItem}
                  />
                );
              })}
            </div>
          )}
        </>

        <div>
          <CartInfo cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
