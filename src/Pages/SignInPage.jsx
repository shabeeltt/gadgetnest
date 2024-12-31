import React from "react";
import { useState } from "react";
import "../Styles/SignInAndSignUpPage.scss";
import { Link } from "react-router-dom";
import CustomButton from "../Components/CustomButton";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({ [name]: value });
  };
  return (
    <div className="auth">
      <div className="content">
        <h2 className="title">Welcome back</h2>
        <h4 className="sub-title">Please enter your details to sign in </h4>

        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
            <div className="link">
              <p>Don't have an account yet?</p>
              <Link
                to="/signup"
                style={{
                  color: "#222",
                  cursor: "pointer",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <CustomButton type="submit">SIGN IN</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
