import React, { useState } from "react";
import { useAddressContext } from "../context/addressContext";
import { useSearchParams } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const AddressCard = ({ addresses, selectedAddress, setSelectedAddress }) => {
  // const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  return (
    <div>
      {addresses?.map((address, key) => {
        return (
          <div
            key={key}
            style={{
              backgroundColor: "#000",
              padding: "10px",
              margin: "20px",
              borderRadius: "12px",
              color: "#eee"
            }}
          >
            <input
              type="radio"
              name="address-radio"
              id={address._id}
              checked={selectedAddress._id === address._id}
              onChange={() => {
                setSelectedAddress(
                  addresses?.find(({ _id }) => _id === address._id)
                );
              }}
            />
            <label htmlFor={address._id} className="order-address-label">
              <p>
                <strong>{address.name}</strong>
              </p>
              <p>
                {address.street}, {address.city}, {address.state}
              </p>
              <p>
                PinCode: {address.zipCode}, {address.country}
              </p>
              <p>Mobile No.: {address.mobile}</p>
            </label>
          </div>
        );
      })}
    </div>
  );
};

const Checkout = ({
  cartProducts,
  setCartProducts,
  selectedAddress,
  setCheckout,
}) => {
  const navigate = useNavigate();
  const totalQty = cartProducts.reduce((acc, product) => product.qty + acc, 0);

  const bill = cartProducts.reduce((acc, product) => {
    const total = product.qty * product.price;
    acc = acc + total;
    return acc;
  }, 0);

  const handleOnClickCheckout = () => {
    setCheckout(true);
    setCartProducts([]);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
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
      <div>
        <p>
          <strong>{selectedAddress.name}</strong>
        </p>
        <p>
          {selectedAddress.street}, {selectedAddress.city},{" "}
          {selectedAddress.state}
        </p>
        <p>
          PinCode: {selectedAddress.zipCode}, {selectedAddress.country}
        </p>
        <p>Mobile No.: {selectedAddress.mobile}</p>
      </div>
      <div className="divider"></div>
      <button
        onClick={handleOnClickCheckout}
        style={{ textAlign: "center" }}
        className="place-order"
      >
        Checkout
      </button>
    </div>
  );
};

const PlaceOrder = () => {
  const { addresses } = useAddressContext();
  const { user } = useAuthContext();
  const userAddresses = addresses === undefined ? user?.address : addresses;
  const { cartProducts, setCartProducts } = useCart();
  const [selectedAddress, setSelectedAddress] = useState(userAddresses[0]);
  const [checkout, setCheckout] = useState(false);

  return (
    <>
      {checkout ? (
        <div>Order Placed Successfully!!</div>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <AddressCard
            addresses={userAddresses}
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
          />
          <Checkout
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            selectedAddress={selectedAddress}
            setCheckout={setCheckout}
          />
        </div>
      )}
    </>
  );
};

export default PlaceOrder;
