import React, { useContext, useState } from "react";
import Search from "../Assets/search";
import Wishlist from "../Assets/Wishlist";
import Cart from "../Assets/Cart";
import "../Styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { useAuthContext } from "../context/authContext";
import { useFilter } from "../context/filterContext";

const Navbar = ({ productData }) => {
  const navigate = useNavigate();
  const { cartProducts, wishListCounter } = useCart();
  const { handleFilterChange } = useFilter();
  const itemsNum = cartProducts?.reduce((total, curr) => total + curr.qty, 0);
  const { isLoggedIn, logOut } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (query) => {
    const filteredData = productData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    if (query === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredData);
    }
  };

  const handleOnClickLogout = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to={`/`}>
          <h3>MyShoppingSite</h3>
        </Link>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{ display: "flex", height: "0px", flexDirection: "cloumn" }}
          className="searchbar-result"
        >
          <div className="searchbar">
            <Search className="searchbar-logo" />
            <input
              className="searchbar-input"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div
            style={
              filteredData.length === 0
                ? { display: "none" }
                : { display: "block", zIndex: "10000000" }
            }
          >
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <h3 style={{ backgroundColor: "#fff", padding: "10px" }}>
                    {item.title}
                  </h3>
                  {/* ... Other details */}
                </Link>
              ))
            ) : (
              <h2 style={{ backgroundColor: "#fff" }}>No items found.</h2>
            )}
          </div>
        </div>
        <div className="right-container">
          <div>
            <Link className="navbar-home" to={"/"}>
              Home
            </Link>
          </div>
          <div>
            <Link className="navbar-product" to={"/products"}>
              Products
            </Link>
          </div>
          <div className="navbar-wishlist">
            <Link to={`/wishlist`}>
              <Wishlist />{" "}
            </Link>
            <span className="navbar-counter">
              <p>{wishListCounter ? wishListCounter : 0}</p>
            </span>
          </div>
          <div className="navbar-cart">
            <Link to={`/cart`}>
              <Cart />
            </Link>
            <span className="navbar-counter">
              <p>{itemsNum ? itemsNum : 0}</p>
            </span>
            <Link to={`/cart`}>
              <p>Cart</p>
            </Link>
          </div>
          <div className="navbar-button-container">
            {!isLoggedIn && (
              <Link to={`/login`} className="login-button-navbar">
                <p>Login</p>
              </Link>
            )}
            {isLoggedIn && (
              <div
                onClick={handleOnClickLogout}
                className="login-button-navbar"
              >
                <p>Profile</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
