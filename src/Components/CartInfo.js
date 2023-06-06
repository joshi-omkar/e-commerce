import React from "react";
import "../Styles/cartinfo.css";
import { Link } from "react-router-dom";

const CartInfo = ({ cartProducts }) => {
  const totalQty = cartProducts.reduce((acc, product) => product.qty + acc, 0);

  const bill = cartProducts.reduce((acc, product) => {
    const total = product.qty * product.price;
    acc = acc + total;
    return acc;
  }, 0);

  return (
    <>
      {cartProducts.length === 0 ? (
        ""
      ) : (
        <div className="cart-details">
          <h3>PRICE DETAILS</h3>
          <div className="divider"></div>
          <div className="cart-details-price">
            {cartProducts?.map((product, key) => {
              return (
                <span key={product.id}>
                  <label>
                    {product.title} <strong>({product.qty} Item)</strong>
                  </label>
                  <label style={{ fontWeight: "700" }}>
                    {product.qty * product.price}
                  </label>
                </span>
              );
            })}
          </div>
          <div className="divider"></div>
          <div className="cart-details-total">
            <label>Total Amount ({totalQty} Item)</label>
            <label>{Math.round(bill * 100) / 100}</label>
          </div>
          <div className="divider"></div>
          <Link style={{textAlign: 'center'}} to={"/paceOrder"} className="place-order">
            Place Order
          </Link>
        </div>
      )}
    </>
  );
};

export default CartInfo;
