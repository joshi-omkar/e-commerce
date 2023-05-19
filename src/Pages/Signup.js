import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/signup.css";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "/api/auth/signup",
        JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        })
      )
      .then((res) => {
        setLoader(!loader);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Request failed with status code 422")
          setError("User already found!!");
      });
  };
  return (
    <form onSubmit={handleOnSubmit} className="signup-page">
      <h3>Sign Up</h3>
      <div className="input-container">
        <p>Email Address</p>
        <input
          type="text"
          placeholder="omkar@gmail.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <p>First Name</p>
        <input
          type="text"
          placeholder="Your First Name..."
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <p>Last Name</p>
        <input
          type="text"
          placeholder="Your Last Name..."
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <p>Passoword</p>
        <input
          type="password"
          placeholder="***********"
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
      <button className="signup-button">Create Your Account</button>
      {error.length !== 0 ? (
        <p
          style={{
            color: "rgb(254, 37, 37)",
            textAlign: "center",
            marginTop: "-12px",
            marginBottom: "-12px",
          }}
        >
          {error}
        </p>
      ) : (
        ""
      )}
      <Link style={{ textAlign: "center" }} to={`/login`}>
        Already have an Account?
      </Link>
    </form>
  );
};

export default Signup;
