import React from "react";
import Search from "../Assets/search";
import Wishlist from "../Assets/Wishlist";
import Cart from "../Assets/Cart";
import '../Styles/navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>MyShoppingSite</h3>
      </div>
      <div className="searchbar">
        <Search className='searchbar-logo' />
        <input className="searchbar-input" type="text" placeholder="Search..." />
      </div>
      <div className="right-container">
        <div className="navbar-wishlist">
          <Wishlist />
          <span className="navbar-counter"><p>0</p></span>
        </div>
        <div className="navbar-cart">
          <Cart />
          <span className="navbar-counter"><p>0</p></span>
          <p>Cart</p>
        </div>
        <div className="navbar-button-container">
          <button className="login-button">
            <p>Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
