import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import ProductListing from "./Pages/ProductListing";
import SingleProduct from "./Pages/SingleProduct";
import Wishlist from "./Pages/Wishlist";
import Navbar from "./Components/Navbar";
import Mockman from "mockman-js";

export const ProductContext = createContext(null);

const App = () => {
  const [productData, setProductData] = useState([]);
  const getProductData = () => {
    axios
      .get("/api/products")
      .then((res) => {
        setProductData(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <ProductContext.Provider value={productData}>
        <Routes>
          <Route path={`/`} exact element={<Home />} />
          <Route path={`/login`} exact element={<Login />} />
          <Route path={`/signup`} exact element={<Signup />} />
          <Route path={`/cart`} exact element={<Cart />} />
          <Route
            path={`/products/:category`}
            exact
            element={<ProductListing />}
          />
          <Route path={`/product/:id`} exact element={<SingleProduct />} />
          <Route path={`/wishlist`} exact element={<Wishlist />} />
          <Route path={`/mockman`} exact element={<Mockman />} />
        </Routes>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
