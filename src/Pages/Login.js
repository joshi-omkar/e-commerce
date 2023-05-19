import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "../Styles/login.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/auth/login", JSON.stringify({ email, password }))
      .then((res) => {
        console.log(res);
        const token = res.data.encodedToken;
        localStorage.setItem("token", token);
        navigate('/')
      })
      .catch((err) => console.log(err));
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
      <Link style={{ textAlign: "center" }} to={`/signup`}>
        Create New Account
      </Link>
    </form>
  );
};

export default Login;
