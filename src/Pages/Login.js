import React, { useState, createContext, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/login.css";
import axios from "axios";
import { UserContext } from "../App";
import { useAuthContext } from "../context/authContext";

const Login = () => {
  const { logIn, setEmail, setPassword } = useAuthContext();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    logIn();
  };

  const guestUserData = {
    email: "omkar@gmail.com",
    password: "Omkar@123",
  };

  const handleGuestLogin = () => {
    setEmail(guestUserData.email);
    setPassword(guestUserData.password);
    logIn();
  };

  return (
    <form onSubmit={handleOnSubmit} className="login-page">
      <h3>Login</h3>
      <div className="input-container">
        <p>Email Address</p>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="omkar@gmail.com"
        />
      </div>
      <div className="input-container">
        <p>Passoword</p>
        <input
          placeholder="***********"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div className="remember-forgot-container">
        <div>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <Link>Forgot your password?</Link>
      </div>
      <button className="login-button">Login</button>
      <button onClick={handleGuestLogin} className="login-button">
        Login as guest
      </button>
      <Link style={{ textAlign: "center" }} to={`/signup`}>
        Create New Account
      </Link>
    </form>
  );
};

export default Login;
